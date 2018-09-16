const moment = require("moment");
const puppeteer = require("puppeteer");
const Table = require("cli-table");

class Costpoint {
  constructor() {
    this.browser = null;
    this.page = null;
    this.table = null;
    this.dates = null;
  }

  static async launch(url, username, password, database) {
    const costpoint = new Costpoint();
    await costpoint._launch();
    await costpoint._login(url, username, password, database);
    await costpoint._table();
    return costpoint;
  }

  display() {
    console.log(this.table.toString());
  }

  async save() {
    await this.page.keyboard.press("F5");
    await this.page.waitForSelector("#pleaseWaitImage", { hidden: true });
  }

  async close() {
    await this.browser.close();
  }

  async set(line, day, hours) {
    const start = this.dates[0].date();
    this.table[line][day - start + 2] = hours;

    await this._select(line);
    await this._skip();
    for (let i = 0; i <= day - start; i++) {
      await this.page.keyboard.press("Tab");
    }

    Array.from(hours.toString()).forEach(
      async x =>
        x == "."
          ? await this.page.keyboard.press("Period")
          : await this.page.keyboard.press(x)
    );
    await this.page.keyboard.press("Tab");
    await this.page.waitForSelector("#pleaseWaitImage", { hidden: true });
  }

  async _launch() {
    this.browser = await puppeteer.launch({
      defaultViewport: { width: 1920, height: 1080 }
      // headless: false
    });
    this.page = (await this.browser.pages()).pop();
  }

  async _login(url, username, password, database) {
    await this.page.goto(url);
    await this.page.waitForSelector("#loginBtn", { visible: true });
    await this.page.type("#USER", username);
    await this.page.type("#CLIENT_PASSWORD", password);
    await this.page.type("#DATABASE", database);
    await this.page.click("#loginBtn");
  }

  async _table() {
    this.dates = await this._dates();

    this.table = new Table({
      head: ["Line", "Description", ...this.dates.map(d => d.format("D"))],
      colWidths: [6, 26, ...this.dates.slice().fill(5)],
      colAligns: ["middle", "left", ...this.dates.slice().fill("middle")]
    });

    (await this._projects()).forEach(({ line, description }) =>
      this.table.push([line, description, ...Array(this.dates.length).fill("")])
    );

    await this.page.waitForSelector("#pleaseWaitImage", { hidden: true });
    await this._select(0);
    await this._skip();
    for (let day = 1; day <= this.dates.length; day++) {
      await this.page.keyboard.press("Tab");
      for (let line = 0; line < this.table.length; line++) {
        const hours = await this.page.evaluate(
          selector => document.querySelector(selector).value,
          `#DAY${day}_HRS-_${line}_E`
        );
        this.table[line][day + 1] = hours ? Number.parseFloat(hours) : "";
      }
    }
  }

  async _dates() {
    const start = await this._startdate();
    const end = await this._enddate();
    const difference = end.diff(start, "days") + 1;
    return [...Array(difference).keys()].map(i => start.clone().add(i, "days"));
  }

  async _startdate() {
    await this.page.waitForSelector("#hdDiv26_1", { visible: true });
    return moment(
      new Date(
        await this.page.evaluate(
          () => document.querySelector("#hdDiv26_1").textContent
        )
      )
    );
  }

  async _enddate() {
    await this.page.waitForSelector("#END_DT", { visible: true });
    return moment(
      new Date(
        await this.page.evaluate(() => document.querySelector("#END_DT").value)
      )
    );
  }

  async _projects() {
    await this.page.waitForSelector("#LINE_DESC-_0_E");
    return await this.page.evaluate(() =>
      Array.from(document.querySelectorAll(".dRw"))
        .filter(e => e.id.includes("row"))
        .map((e, i) => [
          i,
          ...Array.from(e.querySelectorAll("input.tDFRQ"))
            .map(e => e.value.trim())
            .filter(Boolean)
        ])
        .map(([line, description]) => {
          return { line, description };
        })
    );
  }

  async _select(line) {
    const selector = "#UDT02_ID-_" + line + "_E";
    await this.page.waitForSelector(selector, { visible: true });
    await this.page.click(selector);
  }

  async _skip() {
    await this.page.keyboard.press("Tab");
    await this.page.keyboard.press("Tab");
  }
}

module.exports = Costpoint;

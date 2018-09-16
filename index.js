const costpoint = require("./costpoint");
const program = require("commander");

require("dotenv").config();

const url = process.env.COSTPOINT_URL;
const username = process.env.COSTPOINT_USERNAME;
const password = process.env.COSTPOINT_PASSWORD;
const system = process.env.COSTPOINT_SYSTEM;

program
  .name("costpoint")
  .version("0.1.0")
  .description("A command line utility for Costpoint.");

program
  .command("show")
  .description("show timesheet")
  .action(async () => {
    const cp = await costpoint.launch(url, username, password, system);
    cp.display();
    await cp.close();
  });

program
  .command("set <line> <day> <hours>")
  .description("set hours for given project line and day")
  .action(async (line, day, hours) => {
    const cp = await costpoint.launch(url, username, password, system);
    await cp.set(line, day, hours);
    await cp.save();
    cp.display();
    await cp.close();
  });

program.parse(process.argv);

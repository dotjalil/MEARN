const helpers = require("./helpers");

function main(args) {
  const [, , operation, ...data] = args;
  switch (operation) {
    case "add":
      helpers.add(data);
      break;
    case "remove":
      helpers.deleteTask(data);
      break;
    case "edit":
      helpers.edit(data);
      break;
    case "check":
      helpers.check(data);
      break;
    case "uncheck":
      helpers.uncheck(data);
      break;
    case "list":
      helpers.list(data);
      break;
  }
}

main(process.argv);

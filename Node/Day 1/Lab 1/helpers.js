const fs = require("fs");

// Read/create the db.json file
const dbFileName = process.env.dbFileName || "./db.json";
let dbFile;
try {
  dbFile = fs.readFileSync(dbFileName);
  // If file is empty, populate it with an empty array
  const dbFileParsedContent = JSON.parse(dbFile);
  if (!Array.isArray(dbFileParsedContent)) {
    fs.writeFileSync(dbFileName, JSON.stringify([]));
  }
} catch (err) {
  fs.writeFileSync(dbFileName, JSON.stringify([]));
  dbFile = fs.readFileSync(dbFileName);
}
let todos = JSON.parse(dbFile);

function generateId() {
  if (todos.length === 0) {
    return 1;
  } else {
    return todos[todos.length - 1].id + 1;
  }
}

function add(data) {
  var task = data.reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = value;
    return acc;
  }, {});
  task = {
    ...task,
    done: false,
    id: generateId(),
  };
  todos.push(task);
  fs.writeFileSync(dbFileName, JSON.stringify(todos));
}

function deleteTask(data) {
  const id = data.filter((el) => el.split("=")[0] == "id")[0].split("=")[1];
  const filteredTodos = todos.filter((todo) => todo.id != id);
  fs.writeFileSync(dbFileName, JSON.stringify(filteredTodos));
}

function edit(data) {
  var task = data.reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = value;
    return acc;
  }, {});
  const id = Number(task.id);
  const oldTask = todos.filter((todo) => todo.id == id)[0];
  const taskIndex = todos.findIndex((task) => task.id == id);
  let done;
  if (task.done === "true") {
    done = true;
  } else if (task.done === "false") {
    done = false;
  } else {
    done = oldTask.done;
  }
  task = {
    ...oldTask,
    ...task,
    done,
    id,
  };
  const newTodos = [
    ...todos.slice(0, taskIndex),
    task,
    ...todos.slice(taskIndex + 1),
  ];
  fs.writeFileSync(dbFileName, JSON.stringify(newTodos));
}

function check(data) {
  var [id] = data;
  edit([`id=${id}`, `done=${true}`]);
}

function uncheck(data) {
  var [id] = data;
  edit([`id=${id}`, `done=${false}`]);
}

function list() {
  console.log(todos);
}

module.exports = { add, deleteTask, edit, check, uncheck, list };

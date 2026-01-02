const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter { };

// Initialize object
const myEmitter = new MyEmitter();

// Add listener
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted!");
}, 2000);

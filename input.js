const { MESSAGES } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  // stdin configuration code
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // when the stdin recieves data, handle it with the callback function
  stdin.on("data", handleUserInput);
  return stdin;
};

// Specifies what happens when data is recieved from stdin - pressing a key on the keyboard
const handleUserInput = function(key) {
  // Check if user wants to end game
  if (key === '\u0003') {
    console.log("Exiting game. Goodbye!");
    process.exit();
  }
  // Check if key is mapped to anything - if not do nothing
  if (!MESSAGES[key]) {
    return;
  }
  // Send command to server
  connection.write(MESSAGES[key]);
};

module.exports = {
  setupInput
}
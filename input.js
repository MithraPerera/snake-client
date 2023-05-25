// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Handling CTRL + C User Input
  stdin.on("data", handleUserInput);
  return stdin;
};

// Specifies what happens when data is recieved from stdin - pressing a key on the keyboard

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    console.log("Exiting game. Goodbye!");
    process.exit();
  } else if (key === '\u0077') { // W Key
    connection.write("Move: up");
  } else if (key === '\u0061') { // A Key
    connection.write("Move: left");
  } else if (key === '\u0073') { // S Key
    connection.write("Move: down");
  } else if (key === '\u0064') { // D Key
    connection.write("Move: right");
  }
};

module.exports = {
  setupInput
}
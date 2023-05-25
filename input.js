const { MESSAGES } = require("./constants");

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

  // switch (key) {
  //   // Exit - CTRL + C
  //   case '\u0003':
  //     console.log("Exiting game. Goodbye!");
  //     process.exit();
  //     break;
  //   // w Key
  //   case '\u0077':
  //     connection.write("Move: up");
  //     break;
  //   // a Key
  //   case '\u0061':
  //     connection.write("Move: left");
  //     break;
  //   // s Key
  //   case '\u0073':
  //     connection.write("Move: down");
  //     break;
  //   // d Key
  //   case '\u0064':
  //     connection.write("Move: right");
  //     break;
  //   // Message 1
  //   case '\u0031':
  //     connection.write("Say: Catch me if you can!");
  //     break;
  //   // Message 2
  //   case '\u0032':
  //     connection.write("Say: I'm winning!");
  //     break;
  //   // Message 3
  //   case '\u0033':
  //     connection.write("Say: Too slow...");
  //     break;
  //   default:
  //     break;
  // }
};

module.exports = {
  setupInput
}
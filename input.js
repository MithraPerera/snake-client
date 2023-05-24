// setup interface to handle user input from stdin

const setupInput = function() {
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
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log("Exiting game. Goodbye!");
    process.exit();
  }
};

module.exports = {
  setupInput
}
// Import required modules
const { connect } = require("./client");
const { setupInput } = require("./input");

// Use connect function to connect client to server
console.log("Connecting ...");
let conn = connect();
setupInput(conn);
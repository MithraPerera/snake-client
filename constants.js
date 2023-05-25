const IP = 'localhost';
const PORT = 50541;
const MOVE_UP_KEY = '\u0077';
const MOVE_LEFT_KEY = '\u0061';
const MOVE_DOWN_KEY = '\u0073';
const MOVE_RIGHT_KEY = '\u0064';
const MESSAGE1_KEY = '\u0031';
const MESSAGE2_KEY = '\u0032';
const MESSAGE3_KEY = '\u0033';

// Using the  [ ] to say that we are using the const variables above as the actual key
const MESSAGES = {
  [MOVE_UP_KEY]: "Move: up",
  [MOVE_LEFT_KEY]: "Move: left",
  [MOVE_DOWN_KEY]: "Move: down",
  [MOVE_RIGHT_KEY]: "Move: right",
  [MESSAGE1_KEY]: "Say: Catch me if you can!",
  [MESSAGE2_KEY]: "Say: I'm winning!",
  [MESSAGE3_KEY]: "Say: Too slow..."
}

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGE1_KEY,
  MESSAGE2_KEY,
  MESSAGE3_KEY,
  MESSAGES
};
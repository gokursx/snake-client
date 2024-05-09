//Importing connect function to module
const connect = require('./client')
const setupInput = require('./input')
const net = require("net");

// establishes a connection with the game server

console.log("Connecting ...");
const connection = connect();
setupInput(connection);








const { upKey, leftKEY, downKEY, rightKEY} = require('./constants');

let connection;

const handleUserInput = function(key) {

  if (key === upKey) {
    connection.write('Move: up');
  }
  if (key === leftKEY) {
    connection.write('Move: left');
  }
  if (key === downKEY) {
    connection.write('Move: down');
  }
  if (key === rightKEY) {
    connection.write('Move: right');
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

//EXPORT
module.exports = { setupInput };
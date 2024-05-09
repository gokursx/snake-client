
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // Enclosed in quotes
    port: 50541 // Assuming this is your port number; change it if yours is different
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Connection established to game server');
    conn.write('Name: GKR');
  });
  // To dislay the dialog
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

//Exporting the function
module.exports = connect;
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // Enclosed in quotes
    port: 50541 // Assuming this is your port number; change it if yours is different
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write("Name: XXX");
  });
  conn.on("error", (error) => {
    console.error(error);
  });

  return conn;
};

console.log("Connecting ...");
connect();

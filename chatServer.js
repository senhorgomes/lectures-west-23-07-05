const net = require("net");
// Save all connections that have been made in to the server by putting them in an array
const arrayOfConnections = [];
const chatServer = net.createServer((connection) =>{
    // Translate the data received
    connection.setEncoding("utf-8");
    console.log(connection.connecting)
    // Push the connection to the arrayOfConnections
    arrayOfConnections.push(connection);
    console.log("Client connected");
    connection.on("data", (data)=>{
        // print out the message received
        // console.log(data)
        // Write out the message to ALL the clients
        for(const client of arrayOfConnections){
            // IF the connection and the client is NOT the same
            // Send the message
            if(connection !== client){
                client.write(`Client says: ${data}`);
            }
        }
        // console.log(arrayOfConnections)
        // connection.write(`Client says: ${data}`)
    })
    // We want to send out the message to all clients that are connected to the server
})

chatServer.listen(3000, ()=>{
    console.log("I am ready!!!")
})

// const net = require('net');
// const server = net.createServer((c) => {
//   // 'connection' listener.
//   console.log('client connected');
//   c.on('end', () => {
//     console.log('client disconnected');
//   });
//   c.write('hello\r\n');
//   c.pipe(c);
// });
// server.on('error', (err) => {
//   throw err;
// });
// server.listen(8124, () => {
//   console.log('server bound');
// }); 
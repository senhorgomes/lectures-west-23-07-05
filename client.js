const net = require("net");

const client = net.createConnection({host: "localhost", port: 3000}, ()=>{
    client.setEncoding("utf-8");
    client.write("Hey, im an automated script!");
})

client.on("data", (data)=>{
    console.log(data)
})
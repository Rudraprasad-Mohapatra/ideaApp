const express = require('express');
const serverConfig = require("./configs/server.config")

const app = express();

app.listen(serverConfig.port, ()=>{
    console.log(`Server Startd on the port numbr ${serverConfig.port}`)
})
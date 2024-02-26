const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const io = require('socket.io')(http, {
    cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
})

app.use(express.json())

app.post('/', function(req, res){
    io.emit('vote', req.body.voteId)
    res.status(200).send().end()
})

app.get('/test', function(req, res){
    io.emit('vote', 3)
    res.status(200).send().end()
})

io.on('connection', (socket) => {
  console.log('a user connected');
})

http.listen(3000, function(){ 
  console.log("server is running on port 3000"); 
})

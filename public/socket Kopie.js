var io = require('socket.io').listen(5000);

io.sockets.on('connection', function (socket) {
console.log("socket listening at 5000");
});

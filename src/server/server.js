import { Server } from "socket.io"

const io = new Server(null, {
  cors: {  origin: "http://localhost:1234"  }
});

io.on('connection', (socket) => {
  socket.on("sendEvent", event => {
    socket.broadcast.emit("sendEvent", event)
  })
});

io.listen(3000, () => {  
  console.log('listening on *:3000');
});
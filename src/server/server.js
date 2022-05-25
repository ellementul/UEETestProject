import { Server } from "socket.io"

const io = new Server(null, {
  cors: {  origin: "http://localhost:1234"  }
});

io.on('connection', (socket) => {
  socket.on("sendEvent", event => {
    socket.broadcast.emit("sendEvent", event)
  })
});

io.listen(process.env.SERVER_UEE_PORT || 3001, () => { 
  console.log(`listening on *:${process.env.SERVER_UEE_PORT || 3001}`);
});
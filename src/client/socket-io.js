import { io } from "socket.io-client"
import { AbstractTransport } from "uee"

class SocketIOTransport extends AbstractTransport {
  constructor () {
    super();
    this.socket = io(`http://localhost:${process.env.SERVER_UEE_PORT}`)
    this.send = this.send.bind(this)
    this.onRecieve = this.onRecieve.bind(this)
  }
  send (event) {
    this.socket.emit("sendEvent", event)
  } 
  onRecieve  (recieveCallback) { 
    this.socket.on("sendEvent", event => recieveCallback(event) )
  } 
}

export default SocketIOTransport
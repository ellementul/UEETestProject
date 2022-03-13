import { Module } from 'uee'

let timerHandler

class Ticker extends Module {
  constructor () {
    super()
    this.delta = 1000
    this.count = 0
  }
  defEvents () { return [{ name: "tick" }] }

  sendTick () {
    this.count++
    this.sendEvent({ name: 'tick', payload: { count: this.count } })
    timerHandler = setTimeout(this.sendTick.bind(this), this.delta)
  }

  sleep () {
    clearTimeout(timerHandler)
    timerHandler = setTimeout(this.sendTick.bind(this), this.delta * 2)
  }

  run () {
    timerHandler = setTimeout(this.sendTick.bind(this), this.delta)
  }

  tick (payload) {
    if (payload.count > this.count) {
      this.count = payload.count
      this.sleep()
    }
  }
}

export default Ticker
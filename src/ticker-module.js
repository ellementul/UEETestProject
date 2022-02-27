import { Module } from 'uee'

class Ticker extends Module {
  constructor () {
    super()
    this.count = 0
  }
  defEvents () { return [] }

  sendTick () {
    this.count++
    this.sendEvent({ name: 'tick', payload: { count: this.count } })
  }
  run () {
    setInterval(this.sendTick.bind(this), 1000)
  }
}

export default Ticker
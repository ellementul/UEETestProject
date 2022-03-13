import { Module } from 'uee'

let timerHandler

class Ticker extends Module {
  constructor () {
    super()
    this.delta = 100
    this.count = 0
    this.factor = 10
    this.bigCount= 0
  }
  defEvents () { return [{ name: "tick" }] }

  increaseCount () {
    this.count++
    if(this.count % this.factor === 0)
      this.bigCount++
  }

  sendTick () {
    this.increaseCount()
    this.sendEvent({ name: 'tick', payload: { count: this.count, bigCount: this.bigCount } })
  }

  run () {
    setTimeout(() => setInterval(this.sendTick.bind(this), this.delta), this.factor * this.delta)
  }

  tick ({ count, bigCount}) {
    if (count > this.count) {
      this.count = count
      this.bigCount = bigCount
    }
  }
}

export default Ticker
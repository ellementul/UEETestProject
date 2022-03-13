import { Module } from 'uee'

class TickerWidget extends Module {

  constructor () {
    super()

    this.ticks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  defEvents () {
    return [{ name: 'tick' }]
  }

  run () {
    document.getElementById("headticker").innerHTML = 'Runnig widget:'
  }

  tick ({ count, bigCount }) {
    this.ticks.unshift(bigCount)
    this.ticks.pop()
    console.log(this.ticks)
    this.drawTicks()
  }

  drawTicks () {
    const ticks = this.ticks.join("<br>")
    document.getElementById("ticks").innerHTML = `Ticks: <br> ${ticks}`
  }
}

export default TickerWidget
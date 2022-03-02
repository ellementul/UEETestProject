import { Module } from 'uee'

class TickerWidget extends Module {
  defEvents () {
    return [{ name: 'tick' }]
  }

  run () {
    document.body.innerHTML += 'Runnig widget: <br>'
  }

  tick (payload) {
    document.body.innerHTML += `Tick: ${payload.count}<br>`
  }
}

export default TickerWidget
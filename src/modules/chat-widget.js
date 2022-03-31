import { Module } from 'uee'

class TickerWidget extends Module {

  constructor () {
    super()

    this.strings = []
    this.input = null
  }

  defEvents () {
    return [{ name: "message" }]
  }

  run () {
    this.input = document.getElementById("chat-input")
    this.input.addEventListener('input', () => this.updateStrings())
    this.drawStrings()
  }

  message ({ number, string }) {
    this.strings[number] = string
    this.drawStrings()
  }

  updateStrings () {
    const strings = this.input.value.split("\n")
    const payload = this.findUpdatedString(strings)
    this.sendEvent({ name: "message", payload })
  }

  findUpdatedString (strings) {
    const number = strings.findIndex( string => !this.strings.includes(string) )

    if(number === -1)
      return false

    return { number, string: strings[number] }
  }

  drawStrings () {
    const value = this.strings.join("\n")
    this.input.value = value
  }
}

export default TickerWidget
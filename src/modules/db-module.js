import { Module } from 'uee'

const NeDB = require('nedb')


class DB extends Module {
  constructor () {
    super()
    this.serverTime = 0
    this.db = new NeDB()
  }
  defEvents () { return [{ name: "tick" }] }

  run () {
    
  }

  tick ({ bigCount }) {
    if (bigCount < this.serverTime) {
      this.serverTime = bigCount
      db.insert({ entity: "server-time", serverTime: this.serverTime })
    }
  }
}

export default DB
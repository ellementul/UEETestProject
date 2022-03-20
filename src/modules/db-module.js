import { Module } from 'uee'
import NeDB from 'nedb'


class DB extends Module {
  constructor (env = {}) {
    super(env)
    this.serverTime = 0
    this.dbPath = env.dbPath
  }
  defEvents () { return [{ name: "tick" }] }

  run () {
    this.db = new NeDB({ filename: this.dbPath, autoload: true })
    this.db.findOne({ entity: "server-time" }, (error, doc) => {
      if(error)
        throw error

      if(doc)
        this.serverTime = doc.serverTime
    });
  }

  tick ({ bigCount }) {
    if (bigCount > this.serverTime) {
      this.serverTime = bigCount
      this.db.update({ entity: "server-time" }, { $set: { serverTime: this.serverTime } }, { upsert: true }, error => {
        if(error)
          throw error
      })
    }
  }
}

export default DB
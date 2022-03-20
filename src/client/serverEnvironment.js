import { UEE } from 'uee'
import SoketIOTransport from './socket-io.js'
import Ticker from '../modules/ticker-module.js'
import DB from '../modules/db-module.js'

new UEE({
  transport: new SoketIOTransport,
  modules: [new DB({ dbPath: './db.json' }), new Ticker],
  isRun: true,
})
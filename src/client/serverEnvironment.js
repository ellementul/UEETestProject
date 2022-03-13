import { UEE } from 'uee'
import SoketIOTransport from './socket-io.js'
import Ticker from '../modules/ticker-module.js'
import DB from '../modules/db-module'

new UEE({
  transport: new SoketIOTransport,
  modules: [DB, Ticker],
  isRun: true,
})
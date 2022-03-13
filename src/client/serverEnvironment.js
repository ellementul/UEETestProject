import { UEE } from 'uee'
import SoketIOTransport from './socket-io.js'
import Ticker from '../modules/ticker-module.js'

new UEE({
  transport: new SoketIOTransport,
  modules: [Ticker],
  isRun: true,
})
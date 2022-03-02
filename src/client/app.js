import { UEE } from 'uee'
import SoketIOTransport from './socket-io'
import Ticker from '../modules/ticker-module'
import TickerWidget from '../modules/ticker-widget'

new UEE({
  transport: new SoketIOTransport,
  modules: [Ticker, TickerWidget],
  isRun: true,
})

import { UEE } from 'uee'
import SoketIOTransport from './socket-io'
import TickerWidget from '../modules/ticker-widget'

new UEE({
  transport: new SoketIOTransport,
  modules: [new TickerWidget],
  isRun: true,
})

import { UEE } from 'uee'
import Ticker from './ticker-module'
import TickerWidget from './ticker-widget'

new UEE({
  modules: [Ticker, TickerWidget],
  isRun: true,
})

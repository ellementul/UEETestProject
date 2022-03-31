import { UEE } from 'uee'
import SoketIOTransport from './socket-io'
import TickerWidget from '../modules/chat-widget'
import Pixi from '../modules/pixi-module'

new UEE({
  transport: new SoketIOTransport,
  modules: [new TickerWidget, new Pixi],
  isRun: true,
})

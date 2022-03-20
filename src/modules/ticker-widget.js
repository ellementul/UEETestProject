import * as PIXI from 'pixi.js'
import { Module } from 'uee'

class TickerWidget extends Module {

  constructor () {
    super()

    this.ticks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  defEvents () {
    return [{ name: 'tick' }]
  }

  run () {
    document.getElementById("headticker").innerHTML = 'Runnig widget:'
    const app = new PIXI.Application()

    // The application will create a canvas element for you that you
      // can then insert into the DOM.
      document.body.appendChild(app.view);

      // load the texture we need
      app.loader.add('bunny', 'bunny.png').load((loader, resources) => {

        // This creates a texture from a 'bunny.png' image.
        const bunny = new PIXI.Sprite(resources.bunny.texture);

        // Setup the position of the bunny
        bunny.x = app.renderer.width / 2;
        bunny.y = app.renderer.height / 2;

        // Rotate around the center
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        // Add the bunny to the scene we are building.
        app.stage.addChild(bunny);

        // Listen for frame updates
        app.ticker.add(() => {
            // each frame we spin the bunny around a bit
            bunny.rotation += 0.01;
        });
    });
  }

  tick ({ count, bigCount }) {
    this.ticks.unshift(bigCount)
    this.ticks.pop()
    this.drawTicks()
  }

  drawTicks () {
    const ticks = this.ticks.join("<br>")
    document.getElementById("ticks").innerHTML = `Ticks: <br> ${ticks}`
  }
}

export default TickerWidget
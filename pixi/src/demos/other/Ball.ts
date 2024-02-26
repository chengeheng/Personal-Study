import * as PIXI from "pixi.js";

class Ball {
  _width: number;
  _height: number;

  _app: PIXI.Application<HTMLCanvasElement>;
  x!: number;
  y!: number;
  color!: PIXI.ColorSource;
  speedX!: number;
  speedY!: number;
  radius!: number;
  graphics: PIXI.Graphics;

  constructor(
    app: PIXI.Application<HTMLCanvasElement>,
    width: number,
    height: number
  ) {
    this._app = app;
    this._width = width;
    this._height = height;
    this.graphics = this._init();
    this.draw();
  }

  _init() {
    this.x = 0;
    this.y = 0;
    this.color = new PIXI.Color([Math.random(), Math.random(), Math.random()]);
    this.speedX = Math.floor(Math.random() * 100) + 1;
    this.speedY = Math.floor(Math.random() * 100) + 1;

    this.radius = Math.floor(Math.random() * 20) + 5;
    const graphics = new PIXI.Graphics();
    graphics.beginFill(this.color, 1);
    graphics.drawCircle(this.radius, this.radius, this.radius);
    graphics.endFill();
    return graphics;
  }

  draw() {
    const app = this._app;
    app.stage.addChild(this.graphics);
  }
  update(delta: number): void {
    if (this.x <= 0) {
      this.speedX = Math.abs(this.speedX);
    }
    if (this.x >= this._width - 2 * this.radius) {
      this.speedX = -Math.abs(this.speedX);
    }
    if (this.y <= 0) {
      this.speedY = Math.abs(this.speedY);
    }
    if (this.y >= this._height - 2 * this.radius) {
      this.speedY = -Math.abs(this.speedY);
    }

    this.x = this.x + this.speedX * delta;
    this.y = this.y + this.speedY * delta;
    this.graphics.x = this.x;
    this.graphics.y = this.y;
  }
}

export default Ball;

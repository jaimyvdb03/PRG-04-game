import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Coin extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.coin.width, height: Resources.coin.height });
        this.name = 'coin';
    }

    onInitialize() {
        this.graphics.use(Resources.coin.toSprite());
        this.body.collisionType = CollisionType.Passive; 
    }
}

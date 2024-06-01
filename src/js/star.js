import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Star extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.star.width, height: Resources.star.height });
        this.name = 'star';
    }

    onInitialize() {
        this.graphics.use(Resources.star.toSprite());
        this.body.collisionType = CollisionType.Passive; 
    }
}

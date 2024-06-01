import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Key extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.key.width, height: Resources.key.height });
        this.name = 'key';
    }

    onInitialize() {
        this.graphics.use(Resources.key.toSprite());
        this.body.collisionType = CollisionType.Passive; // Passive collision type
    }
}

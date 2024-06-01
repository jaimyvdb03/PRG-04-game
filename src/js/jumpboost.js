import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Jumpboost extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.jumpboost.width, height: Resources.jumpboost.height });
        this.name = 'jumpboost';
    }

    onInitialize() {
        this.graphics.use(Resources.jumpboost.toSprite());
        this.body.collisionType = CollisionType.Passive; 
    }
}

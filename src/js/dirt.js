import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Dirt extends Actor {
    constructor(x,y) {
        super({ x,y, width: Resources.dirt.width, height: Resources.dirt.height });
    }
    
    onInitialize() {
        this.graphics.use(Resources.dirt.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
    }
}

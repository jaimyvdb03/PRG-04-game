import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Platform extends Actor {
    constructor(x,y) {
        super({ x,y, width: Resources.platform.width, height: Resources.platform.height });
    }
    
    onInitialize() {
        this.graphics.use(Resources.platform.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
    }
}

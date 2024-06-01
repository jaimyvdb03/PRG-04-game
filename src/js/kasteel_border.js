import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class kasteel_border extends Actor {
    constructor(x,y) {
        super({ x,y, width: Resources.kasteel_border.width, height: Resources.kasteel_border.height });
    }
    
    onInitialize() {
        this.graphics.use(Resources.kasteel_border.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
    }
}

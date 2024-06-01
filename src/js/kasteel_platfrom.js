import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class kasteel_platform extends Actor {
    constructor(x,y) {
        super({ x,y, width: Resources.kasteel_platform.width, height: Resources.kasteel_platform.height });
    }
    
    onInitialize() {
        this.graphics.use(Resources.kasteel_platform.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
    }
}

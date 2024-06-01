import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Kasteel extends Actor {
    constructor(x,y) {
        super({ x,y, width: Resources.kasteel.width, height: Resources.kasteel.height });
    }
    
    onInitialize() {
        this.graphics.use(Resources.kasteel.toSprite());
        this.body.collisionType = CollisionType.Passive; // Fixed collision type
    }
}

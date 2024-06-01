import { Actor, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Cloud_platform extends Actor {
    constructor(x, y, startpositionX, endpositionX, startpositionY, endpositionY, speedX, speedY) {
        super({ x, y, width: Resources.Cloud_platform.width - 10, height: Resources.Cloud_platform.height - 15 });

        this.body.friction = 0.1;
        this.body.restitution = 0;
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type

        this.startpositionX = startpositionX;
        this.endpositionX = endpositionX;
        this.startpositionY = startpositionY;
        this.endpositionY = endpositionY;
        this.speedX = speedX;
        this.speedY = speedY;
        this.directionX = 1; // 1 for moving right, -1 for moving left
        this.directionY = 1; // 1 for moving down, -1 for moving up
    }

    onInitialize() {
        this.graphics.use(Resources.Cloud_platform.toSprite());
    }

    update(engine, delta) {
        super.update(engine, delta);

        // Update horizontal position
        this.pos.x += this.speedX * this.directionX * delta / 1000;

        // Check for horizontal platform boundaries
        if (this.pos.x >= this.endpositionX) {
            this.pos.x = this.endpositionX;
            this.directionX = -1; // Change direction to move left
        } else if (this.pos.x <= this.startpositionX) {
            this.pos.x = this.startpositionX;
            this.directionX = 1; // Change direction to move right
        }

        // Update vertical position
        this.pos.y += this.speedY * this.directionY * delta / 1000;

        // Check for vertical platform boundaries
        if (this.pos.y >= this.endpositionY) {
            this.pos.y = this.endpositionY;
            this.directionY = -1; // Change direction to move up
        } else if (this.pos.y <= this.startpositionY) {
            this.pos.y = this.startpositionY;
            this.directionY = 1; // Change direction to move down
        }
    }
}

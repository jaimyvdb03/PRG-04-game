import { Actor, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Player } from './player.js';

export class Bird extends Actor {
    constructor(x, y, startpositionX, endpositionX, startpositionY, endpositionY, speedX, speedY) {
        super({ x, y, width: Resources.bird.width, height: Resources.bird.height});

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
        this.graphics.use(Resources.bird.toSprite());
    }

    update(engine, delta) {
        super.update(engine, delta);

        // Update horizontal position
        this.pos.x += this.speedX * this.directionX * delta / 1000;

        // Check for horizontal platform boundaries
        if (this.pos.x >= this.endpositionX) {
            this.pos.x = this.endpositionX;
            this.graphics.flipHorizontal = true;
            this.directionX = -1; // Change direction to move left
        } else if (this.pos.x <= this.startpositionX) {
            this.pos.x = this.startpositionX;
            this.graphics.flipHorizontal = false;
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

    onCollision = (evt) => {
        const other = evt.other;
        if (other instanceof Player) { // Assuming you have a Player class
            const pushDirection = this.direction === 1 ? 1 : -1;
            other.pos.x += 30 * pushDirection;
            other.pos.y += 100 * pushDirection;
        }
    }
}

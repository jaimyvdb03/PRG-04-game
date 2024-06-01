import { Actor, Vector, CollisionType } from 'excalibur';
import { Resources } from './resources.js';
import { Player } from './player.js';

export class Monkey extends Actor {
    constructor(x, y, platformStartX, platformEndX) {
        super({ 
            pos: new Vector(x, y), 
            width: Resources.monkey.width, 
            height: Resources.monkey.height 
        });

        // Platform boundaries
        this.platformStartX = platformStartX;
        this.platformEndX = platformEndX;

        // Movement properties
        this.speed = 100; 
        this.direction = 1; 
    }

    onInitialize(engine) {
        this.graphics.use(Resources.monkey.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Set the collision type to Fixed

        // Start movement
        this.on('preupdate', this.updateMovement);

        // Collision handler
        this.on('collisionstart', this.onCollision);
    }

    updateMovement = (evt) => {
        // Calculate new position
        this.pos.x += this.speed * this.direction * evt.delta / 1000;

        // Check for platform boundaries
        if (this.pos.x >= this.platformEndX) {
            this.graphics.flipHorizontal = true;
            this.pos.x = this.platformEndX;
            this.direction = -1;
        } else if (this.pos.x <= this.platformStartX) {
            this.graphics.flipHorizontal = false;
            this.pos.x = this.platformStartX;
            this.direction = 1;
        }
    }

    onCollision = (evt) => {
        const other = evt.other;
        if (other instanceof Player) { // Assuming you have a Player class
            const pushDirection = this.direction === 1 ? 1 : -1;
            other.pos.x += 80 * pushDirection;
            other.pos.y += 50 * pushDirection;
        }
    }
}

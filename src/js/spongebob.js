import { Actor, Engine, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur";
import { Resources } from './resources.js';

export class Spongebob extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.spongebob.width - 50, height: Resources.spongebob.height - 5 });
        this.body.collisionType = CollisionType.Active; // Active collision type
    }

    onInitialize(engine) {
        this.body.useGravity = true;
        this.on('collisionstart', this.handleCollision.bind(this));
        this.graphics.use(Resources.spongebob.toSprite());
        this.pos = new Vector(800, 150);
        this.vel = new Vector(0, 0);
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.nearbyDoor = null;
    }

    handleCollision(evt) {
        if (evt.other.name === 'key') {
            // Remove the key from the game
            evt.other.kill();

            // Add the key to local storage
            let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
            inventory.push('key');
            localStorage.setItem('inventory', JSON.stringify(inventory));
        } else if (evt.other.name === 'door') {
            // Set the nearby door reference
            this.nearbyDoor = evt.other;
        }
    }

    onPreUpdate(engine) {
        let xspeed = 0;

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.body.applyLinearImpulse(new Vector(0, -4000));
        }

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 200;
            this.graphics.flipHorizontal = true;
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft) || engine.input.keyboard.isHeld(Keys.Sprint)) {
                xspeed = 400;
                this.graphics.flipHorizontal = true;
            }
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -200;
            this.graphics.flipHorizontal = false;
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft) || engine.input.keyboard.isHeld(Keys.Sprint)) {
                xspeed = -400;
                this.graphics.flipHorizontal = false;
            }
        }

        this.vel = new Vector(xspeed, this.vel.y);

        if (engine.input.keyboard.wasPressed(Keys.E) && this.nearbyDoor) {
            let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
            if (inventory.includes('key')) {
                // Remove the door and allow passage
                this.nearbyDoor.kill();
                this.nearbyDoor = null;
            } else {
                // Display locked message
                this.nearbyDoor.displayMessage('This door is locked, find the key');
            }
        }
    }
}

import { Actor, Engine, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur";
import { Resources } from './resources.js';
import { Game_over_Scene } from './game_over_scene.js';

class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    use() {
        console.log(`Using ${this.name} which deals ${this.damage} damage.`);
    }
}

export class Player extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.player.width - 5, height: Resources.player.height });
        this.body.collisionType = CollisionType.Active; // Active collision type
        
        this.jumpBoostActive = false;
        this.jumpBoostTimer = 0;

        // Voeg een wapen toe aan de speler
        this.weapon = new Weapon('Sword', 10);
    }

    onInitialize(engine) {
        this.engine = engine;  // Store the engine instance
        this.body.useGravity = true;
        this.on('collisionstart', this.handleCollision.bind(this));
        this.graphics.use(Resources.player.toSprite());
        this.vel = new Vector(0, 0);
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.nearbyDoor = null;

        this.body.friction = 0.1;
        this.body.restitution = 0;

        // Initialize score if not already set
        let score = parseInt(localStorage.getItem('score')) || 0;
        console.log(`Score initialized: ${score}`);
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
        else if (evt.other.name === 'jumpboost') {
            // Activate the jump boost
            evt.other.kill();
            this.jumpBoostActive = true;
            this.jumpBoostTimer = 10 * 1000; // 10 seconds
        }
        else if (evt.other.name === 'coin') {
            // Remove the coin from the game
            evt.other.kill();
    
            // Update score
            let score = parseInt(localStorage.getItem('score')) || 0;
            score++;
            localStorage.setItem('score', score);
            console.log(`Score updated: ${score}`);
        }
        else if (evt.other.name === 'star') {
            // Go to the winner scene
            this.engine.goToScene('winner');  // Use the stored engine instance
        }
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0;

        // Check for y-coordinate to trigger game over
        if (this.pos.y >= 1300) {
            engine.goToScene('game_over');
        }

        // Update jump boost timer
        if (this.jumpBoostActive) {
            this.jumpBoostTimer -= delta;
            if (this.jumpBoostTimer <= 0) {
                this.jumpBoostActive = false;
            }
        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            let jumpStrength = this.jumpBoostActive ? -7000 : -5000;
            this.body.applyLinearImpulse(new Vector(0, jumpStrength));
        }

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 200;
            this.graphics.flipHorizontal = true;
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft) || engine.input.keyboard.isHeld(Keys.Sprint)) {
                xspeed = 300;
                this.graphics.flipHorizontal = true;
            }
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -200;
            this.graphics.flipHorizontal = false;
            if (engine.input.keyboard.isHeld(Keys.ShiftLeft) || engine.input.keyboard.isHeld(Keys.Sprint)) {
                xspeed = -300;
                this.graphics.flipHorizontal = false;
            }
        }

        this.vel = new Vector(xspeed, this.vel.y);

        if (engine.input.keyboard.wasPressed(Keys.E) && this.nearbyDoor) {
            let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
            if (inventory.includes('key')) {
                // Remove the door and allow passage to level2
                this.nearbyDoor.kill();
                this.nearbyDoor = null;
                engine.goToScene('level2');
            } else {
                // Display locked message
                this.nearbyDoor.displayMessage('This door is locked, find the key');
            }
        }
    }
}

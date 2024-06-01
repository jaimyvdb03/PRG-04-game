import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Lives extends Actor {
    constructor() {
        super();
        this.livesIcons = [];
        this.numLives = 3; 
    }

    onInitialize(engine) {
        for (let i = 0; i < this.numLives; i++) {
            const heart = new Actor()
            heart.graphics.use(Resources.heart.toSprite())
            heart.pos = new Vector(30 + (i * 80), 90)
            this.addChild(heart)
        }wA
    }
}

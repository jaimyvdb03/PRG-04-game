import { Actor, Vector, CollisionType, Label, Font, FontUnit, Color } from "excalibur";
import { Resources } from './resources.js';

export class Score extends Actor {
    constructor(player) {
        super({ x: player.x, y: player.y - 100 }); // Beginpositie 100px boven de speler
        this.player = player;
    }

    onInitialize() {
        // Maak een label om de score weer te geven
        this.scoreLabel = new Label({
            text: `Score: ${this.getScore()}`,
            font: new Font({
                family: 'impact',
                size: 20,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        this.add(this.scoreLabel);

        // Event luisteren voor het oppakken van een munt
        this.scene.on("coinpickup", (event) => {
            // Update de score wanneer een munt wordt opgepakt
            this.scoreLabel.text = `Score: ${this.getScore()}`;
        });
    }

    getScore() {
        // Haal de score op uit de local storage
        return JSON.parse(localStorage.getItem('score')) || 0;
    }

    update(engine, delta) {
        super.update(engine, delta);

        // Update de positie van de scorelabel boven het hoofd van de speler
        this.pos.x = this.player.pos.x;
        this.pos.y = this.player.pos.y - 100;
    }
}

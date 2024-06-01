import { Scene, Input, Vector } from "excalibur";
import { Game_over } from './game_over.js';
import { Level1Scene } from './Level1Scene.js';
import { Label, FontUnit, Font} from "excalibur";

export class Game_over_Scene extends Scene {
    onInitialize(engine) {
        let introBanner = new Game_over();
        this.add(introBanner);

        // Haal de score op uit de lokale opslag
        let score = JSON.parse(localStorage.getItem('score')) || 0;

        let label = new Label({
            text: 'Score: ' + score, // Voeg de score toe aan de tekst
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                color: 'white',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(label);
    }

    onActivate(context) {
        this.on('preupdate', (event) => {
            if (event.engine.input.keyboard.wasPressed(Input.Keys.R)) {
                // Wis de inventaris
                localStorage.setItem('inventory', JSON.stringify([]));
                
                // Reinitialiseer Level1Scene
                let level1 = new Level1Scene(event.engine);
                event.engine.add('level1', level1);
                
                // Transitie naar Level1Scene
                event.engine.goToScene('level1');
            }
        });
    }
}

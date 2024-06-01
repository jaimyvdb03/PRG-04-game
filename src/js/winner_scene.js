import { Scene, Input, Vector, Label, FontUnit, Font } from "excalibur";
import { Winner } from './winner.js';
import { Level1Scene } from './Level1Scene.js';

export class Winner_scene extends Scene {
    onInitialize(engine) {
        let introBanner = new Winner();
        this.add(introBanner);

         // Haal de score op uit de lokale opslag
         let score = JSON.parse(localStorage.getItem('score')) || 0;

         let label = new Label({
             text: 'Score: ' + score, // Voeg de score toe aan de tekst
             pos: new Vector(100, 100),
             font: new Font({
                 family: 'impact',
                 color: 'Black',
                 size: 24,
                 unit: FontUnit.Px
             })
         })
         this.add(label);
    }


}

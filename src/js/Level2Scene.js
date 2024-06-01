import { Scene, Vector, Engine, BoundingBox, Label, Font, FontUnit, Color } from "excalibur";
import { Player } from "./player.js";
import { kasteel_background } from "./kasteel_background.js";
import { kasteel_platform } from "./kasteel_platfrom.js";
import { kasteel_border } from "./kasteel_border.js";
import { Jumpboost } from "./jumpboost.js";
import { Star } from "./star.js";
import { Coin } from "./coin.js";
import { Bird } from "./bird.js";

export class Level2Scene extends Scene {
    onInitialize(engine) {
        console.log("level 2!");

        // Clear the inventory when the game starts
        localStorage.setItem('inventory', JSON.stringify(['key']));

        let background = new kasteel_background();
        this.add(background);

        this.add(new Jumpboost(440, 825));  
        this.add(new kasteel_border(20, 600));  
        this.add(new kasteel_border(2480, 600)); 

        //coins
        this.add(new Star(1750, 1100));   
        this.add(new Coin(200, 820));   
        this.add(new Coin(250, 820));   
        this.add(new Coin(300, 820));   
        this.add(new Coin(940, 600));   
        this.add(new Coin(1540, 300));   
        this.add(new Coin(1840, 300));   
        this.add(new Coin(2140, 300));   
        this.add(new Coin(2140, 300));   
        this.add(new Coin(2140, 300));   
        this.add(new Coin(2370, 400));   
        this.add(new Coin(2370, 500));   
        this.add(new Coin(2370, 600));   
        this.add(new Coin(2370, 700));   
        this.add(new Coin(2370, 800));   
        this.add(new Coin(2370, 900));   
       
        //platforms
        this.add(new kasteel_platform(140, 1100));  
        this.add(new kasteel_platform(440, 1100)); 
        this.add(new kasteel_platform(940, 900));  
        this.add(new kasteel_platform(1540, 600));  
        this.add(new kasteel_platform(1540, 1100));  
        this.add(new kasteel_platform(1840, 600));  
        this.add(new kasteel_platform(2140, 600));  
        this.add(new kasteel_platform(2350, 1400));  
        this.add(new kasteel_platform(1750, 1400));  

        this.add(new Bird(700, 500, 700, 700, 500, 700, 0, 150));
        this.add(new Bird(1200, 500, 1200, 1200, 500, 700, 0, 150));
        this.add(new Bird(2100, 900, 2100, 2100, 900, 1100, 0, 150));
        this.add(new Bird(1950, 1050, 1950, 1950, 1050, 1200, 0, 150));

        let player = new Player(100, 800);
        this.add(player);
        this.camera.zoom = 1.1;
        this.camera.strategy.lockToActor(player);
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2500, 1200));

        // Haal score uit local storage
        let score = JSON.parse(localStorage.getItem('score')) || 0;

        // Bereken de positie van het label
        let viewportWidth = engine.canvas.clientWidth;
        let viewportHeight = engine.canvas.clientHeight;
        let cameraWidth = this.camera.viewport.width;
        let cameraHeight = this.camera.viewport.height;
        let labelX = (cameraWidth - viewportWidth) / 2 + 20; // afstand vanaf de linkerkant
        let labelY = (cameraHeight - viewportHeight) / 2 + 20; // afstand vanaf de bovenkant

        // Maak een label om de score weer te geven
        let scoreLabel = new Label({
            text: `Score: ${score}`,
            pos: new Vector(labelX, labelY),
            font: new Font({
                family: 'impact',
                size: 20, // Kleinere grootte voor de score
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        this.add(scoreLabel);

        // Functie om score te updaten
        const updateScore = (newScore) => {
            score = newScore;
            scoreLabel.text = `Score: ${score}`;
        };

        // Event luisteren voor het oppakken van een munt
        this.on("coinpickup", (event) => {
            // Verhoog de score met de waarde van de munt
            updateScore(score + event.coinValue);
        });
    }
}

import { Scene, Vector, Engine, BoundingBox, Label, Font, FontUnit, Color } from "excalibur";
import { Background } from "./background.js";
import { Cloud_platform } from "./cloud-platform.js";
import {Platform} from "./platfrom.js";
import { Dirt } from "./dirt.js";
import { Key } from "./key.js";
import { Door } from "./door.js";
import { Monkey } from "./monkey.js";
import { Bird } from "./bird.js";
import { Coin } from "./coin.js";
import { Kasteel } from "./kasteel.js";
import { Player } from "./player.js";

export class Level1Scene extends Scene {
    onInitialize(engine) {
        console.log("start de game!");

        // Clear the inventory when the game starts
        localStorage.setItem('inventory', JSON.stringify([]));
        
        let background = new Background();
        this.add(background);

        this.add(new Cloud_platform(140,100));
        this.add(new Key(140,50));

        this.add(new Platform(140,900));  
        this.add(new Dirt(140,1055));        
        this.add(new Dirt(140,1210));

        this.add(new Platform(750,1150));        
        this.add(new Dirt(750,1300));
        
        this.add(new Platform(1150,1050));        
        this.add(new Dirt(1150,1206));
        this.add(new Platform(1440,1050));        
        this.add(new Dirt(1440,1206));

        this.add(new Platform(2050,1050));        
        this.add(new Dirt(2050,1206));
        this.add(new Platform(2340,1050));        
        this.add(new Dirt(2340,1206));

        this.add(new Platform(3070,1170));        
        this.add(new Platform(3360,1170));        
        this.add(new Kasteel(3350,982));
        this.add(new Door(3350,1077));

        //cloud platform x, y, x-start, x-end, y-start, y-end, x-speed, y-speed
        this.add(new Cloud_platform(140, 100, 140, 140, 100, 100, 0, 0)); // Example parameters
        this.add(new Cloud_platform(2700, 900, 2700, 2700, 850, 1050, 0, 50));
        this.add(new Cloud_platform(2400, 750, 2400, 2400, 750, 750, 0, 0));
        this.add(new Cloud_platform(2000, 400, 2000, 2000, 400, 650, 0, 100));
        this.add(new Cloud_platform(1500, 500, 1500, 1500, 500, 500, 0, 0));
        this.add(new Cloud_platform(1300, 350, 1300, 1300, 350, 350, 0, 0));
        this.add(new Cloud_platform(1000, 300, 800, 1000, 300, 300, 50, 0));
        this.add(new Cloud_platform(500, 100, 500, 500, 100, 300, 0, 50));

        //enemies
        this.add(new Monkey(1340, 990, 1050, 1540));
        this.add(new Monkey(1920, 990, 1920, 2480));
       
        this.add(new Bird(1800, 550, 1850, 2150, 550, 550, 150, 0));

        //Coins
        this.add(new Coin(270, 800));   
        this.add(new Coin(350, 750)); 
        this.add(new Coin(430, 700));   
        this.add(new Coin(510, 750));   
        this.add(new Coin(590, 800));  

        this.add(new Coin(900, 1000));   
        this.add(new Coin(1200, 1000));   
        this.add(new Coin(1290, 1000));  

        this.add(new Coin(1600, 950));   
        this.add(new Coin(1650, 850));   
        
        this.add(new Coin(2700, 750));   
        this.add(new Coin(2400, 700));   
        this.add(new Coin(1500, 450));   
        this.add(new Coin(1300, 300));   
        this.add(new Coin(700, 250));   

        let player = new Player(100, 700);
        this.add(player);
        this.camera.zoom = 1.1;
        this.camera.strategy.lockToActor(player);
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3500, 1200));

        // Haal de score op uit de lokale opslag
        let score = JSON.parse(localStorage.getItem('score')) || 0;

        let label = new Label({
            text: 'Find a way in to the castle ', // Voeg de score toe aan de tekst
            pos: new Vector(100, 700),
            font: new Font({
                family: 'impact',
                color: 'Black',
                size: 14,
                unit: FontUnit.Px
            })
        })
        this.add(label);
    }
}

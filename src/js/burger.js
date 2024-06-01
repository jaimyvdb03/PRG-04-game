import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";

export class Burger extends Actor{

    onInitialize(){
        this.graphics.use(Resources.burger.toSprite());

        let size = 0.04 + Math.random() * 0.04; // Genereert een getal tussen 0.04 en 0.08
        console.log('hello I am a fish')
        this.vel = new Vector(0, Math.random()*250)
        this.pos = new Vector(Math.random()*800, -100)
        this.scale = new Vector(size, size) 
        
        this.on("pointerup", ()=> this.kill())
    }

    logPosition(){
        console.log(`mijn x is ${this.pos.x}`)
    }

    onPostUpdate(){
        if (this.pos.y > 700){
            this.pos.y = 0
        }
    }

    
}

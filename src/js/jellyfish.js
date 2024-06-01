import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";

export class Jellyfish extends Actor{

    constructor(){
        super({width: Resources.jellyfish.width, height: Resources.jellyfish.height})
    }

    onInitialize(){
        this.graphics.use(Resources.jellyfish.toSprite());

        let size = 0.04 + Math.random() * 0.04; // Genereert een getal tussen 0.04 en 0.08
        console.log('hello I am a fish')

        this.vel = new Vector((Math.random()*-200), 0)
        this.pos = new Vector(Math.random()*1280, Math.random()*720)
        this.scale = new Vector(size, size) 
        
        this.on("pointerup", ()=> this.kill())
        this.logPosition()
    }

    logPosition(){
        console.log(`mijn x is ${this.pos.x}`)
        console.log(`mijn y is ${this.pos.y}`)
    }

    onPostUpdate(){
        if (this.pos.x < -200){
           this.pos.x = 1280
        }
    }

    
}

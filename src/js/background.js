import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";

export class Background extends Actor{

    onInitialize(engine){
        this.graphics.use(Resources.background.toSprite());

        this.pos = new Vector(2000,600 );  
    }

    
}



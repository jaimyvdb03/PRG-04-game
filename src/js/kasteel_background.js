import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";

export class kasteel_background extends Actor{

    onInitialize(engine){
        this.graphics.use(Resources.kasteel_background.toSprite());

        this.pos = new Vector(1250,600 );  
    }

    
}



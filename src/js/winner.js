import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";

export class Winner extends Actor{

    onInitialize(engine){
        this.graphics.use(Resources.winner.toSprite());

        this.pos = new Vector(640, 360);  
    }
}



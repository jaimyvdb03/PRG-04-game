import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";

export class start_blue extends Actor{

    onInitialize(engine){
        this.graphics.use(Resources.start_blue.toSprite());
        this.pos = new Vector(640, 360);  
    }
}

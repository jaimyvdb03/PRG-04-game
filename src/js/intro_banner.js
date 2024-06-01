import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";

export class Intro_banner extends Actor{

    onInitialize(engine){
        this.graphics.use(Resources.intro_banner.toSprite());

        this.pos = new Vector(640, 360);  
    }
}



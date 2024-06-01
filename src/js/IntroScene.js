import { Scene, Actor, Vector, Input } from "excalibur";
import { Resources } from './resources.js';
import { Intro_banner } from './intro_banner.js';
import { start_blue } from './press_s_blue.js';

export class IntroScene extends Scene {

    onInitialize(engine) {
        let introBanner = new Intro_banner();
        this.add(introBanner);

        let press_s_blue = new start_blue();
        this.add(press_s_blue)
    }

    onActivate(context) {
        this.on('preupdate', (event) => {
            if (event.engine.input.keyboard.wasPressed(Input.Keys.S)) {
                event.engine.goToScene('level1');
            }
        });
    }
}

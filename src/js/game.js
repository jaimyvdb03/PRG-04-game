import { Engine, Vector, DisplayMode, SolverStrategy } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { IntroScene } from './IntroScene.js';
import { Game_over_Scene } from './game_over_scene.js';
import { Winner_scene } from './winner_scene.js';
import { Level1Scene } from './Level1Scene.js';
import { Level2Scene } from './Level2Scene.js';

const options = { 
    width: 1280, height: 720, 
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 800),
    }
}

export class Game extends Engine {
    constructor() {
        super(options);
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        // Register the scenes
        this.add('intro', new IntroScene());
        this.add('game_over', new Game_over_Scene());
        this.add('level1', new Level1Scene());
        this.add('level2', new Level2Scene());
        this.add('winner', new Winner_scene());

        // Start with the intro scene
        this.goToScene('intro');
    }
}

new Game();

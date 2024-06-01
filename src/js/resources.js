import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Cloud_platform } from './cloud-platform'

const Resources = {
    player: new ImageSource('images/playe.png'),
    background: new ImageSource('images/cloud-background.png'),
    intro_banner: new ImageSource('images/intro_Banner.png'),
    game_over: new ImageSource('images/game_over.png'),
    winner: new ImageSource('images/winner.png'),
    kasteel: new ImageSource('images/kasteel.png'),
    kasteel_background: new ImageSource('images/kasteel_background.png'),
    kasteel_platform: new ImageSource('images/kasteel_platform.png'),
    kasteel_border: new ImageSource('images/kasteel_border.png'),
    start_blue: new ImageSource('images/press_s_blue.png'),
    heart: new ImageSource('images/heart.png'),

    //platforms
    Cloud_platform: new ImageSource('images/cloud-platform.png'),
    platform: new ImageSource('images/platform.png'),
    dirt: new ImageSource('images/dirt.png'),

    //interections
    key: new ImageSource('images/key.png'),
    door: new ImageSource('images/door.png'),
    jumpboost: new ImageSource('images/jumpboost.png'),
    star: new ImageSource('images/star.png'),
    coin: new ImageSource('images/coin.png'),

    //enemies
    monkey: new ImageSource('images/monkey.png'),
    bird: new ImageSource('images/bird.png'),
    
}
const ResourceLoader = new Loader([
    Resources.background,
    Resources.intro_banner,
    Resources.game_over,
    Resources.winner,
    Resources.player,
    Resources.kasteel,
    Resources.kasteel_background,
    Resources.kasteel_platform,
    Resources.kasteel_border,
    Resources.start_blue,
    Resources.heart,

    //platforms
    Resources.Cloud_platform,
    Resources.platform,
    Resources.dirt,
    
    //interections
    Resources.key,
    Resources.door,
    Resources.jumpboost,
    Resources.star,
    Resources.coin,

    //enemies
    Resources.monkey,
    Resources.bird,
])

export { Resources, ResourceLoader }
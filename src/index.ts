import { AnimatedSprite, Application, BaseTexture, Spritesheet } from 'pixi.js';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const pipeSheet = {
	frames: {
		startDownEmpty: {
			frame: { x:0, y: 0, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		startDownFull: {
			frame: { x: 16, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
	},
	meta: {
		image: 'NES-PipeDream-Pipes.png',
		format: 'RGBA8888',
		size: { w: 384, h: 528 },
		scale: '1',
	},
	animations: {
		pipes: ['startDownEmpty','startDownFull'] //array of frames by name

	},
};

// Create the SpriteSheet from data and image
const spritesheet = new Spritesheet(
	BaseTexture.from(pipeSheet.meta.image),
	pipeSheet
);

// Generate all the Textures asynchronously
await spritesheet.parse();

// spritesheet is ready to use!
const anim = new AnimatedSprite(spritesheet.animations.pipes);

// set the animation speed
anim.animationSpeed = 0.01;

// play the animation on a loop
anim.play();

// add it to the stage to render
app.stage.addChild(anim);
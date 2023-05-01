import { Application, BaseTexture, Container, Sprite, Spritesheet } from 'pixi.js';
import { GRID_SIZE, pipeSheet } from './constants';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480,
});

const spritesheet = new Spritesheet(
	BaseTexture.from(pipeSheet.meta.image),
	pipeSheet
);

await spritesheet.parse();


const container = new Container();
app.stage.addChild(container);

for (let i = 0; i < GRID_SIZE; i++) {
	for (let j = 0; j < GRID_SIZE; j++) {
		const square = new Sprite(spritesheet.textures.emptySquare)
		square.x = i * 16;
		square.y = j * 16;
		square.eventMode = 'static';
		square.on("pointerdown", () => { square.texture = spritesheet.textures.startDownEmpty});
		app.stage.addChild(square);
	}
}

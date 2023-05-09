import { Application, BaseTexture, Container, Sprite, Spritesheet } from 'pixi.js';
import { GRID_SIZE, NUMBER_OF_TILES, PIPE_TYPES, pipeSheet } from './constants';
import { getRandomLocation } from './utils';

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

const tileFeed = new Container();
tileFeed.x = 180;
tileFeed.name = 'tilefeed';
app.stage.addChild(tileFeed);

const setUpBoard = () => {
	for (let i = 0; i < GRID_SIZE; i++) {
		for (let j = 0; j < GRID_SIZE; j++) {
			const square = new Sprite(spritesheet.textures.emptySquare)
			square.x = i * 16;
			square.y = j * 16;
			square.name = `${i}x${j}`;
			square.eventMode = 'static';
			square.on("pointerdown", () => {
				square.texture = spritesheet.textures.startDownEmpty;
			});
			container.addChild(square);
		}
	}

	const startingTile = container.getChildByName(getRandomLocation(GRID_SIZE, GRID_SIZE)) as Sprite;
	startingTile.name = "start";
	startingTile.texture = spritesheet.textures.startDownEmpty;
	startingTile.addChild(new Sprite(spritesheet.textures.start));

	const endingTile = container.getChildByName(getRandomLocation(GRID_SIZE, GRID_SIZE)) as Sprite;
	endingTile.name = "end";
	endingTile.texture = spritesheet.textures.startDownEmpty;
	endingTile.addChild(new Sprite(spritesheet.textures.end));
}

const createFeed = () => {
	for (let i = NUMBER_OF_TILES; i >= 0; i--) {
		const tile = new Container();
		tile.y = i * 18;
		tile.name = `tile${i}`;
		tileFeed.addChild(tile);
	}
	console.log(tileFeed.children)
	for (let i = 0; i <= NUMBER_OF_TILES; i++) {
		const randomPipe = Math.floor(Math.random() * PIPE_TYPES.length)
		const tile = new Sprite(spritesheet.textures[`${PIPE_TYPES[randomPipe]}Empty`]);
		const feed = tileFeed.getChildByName(`tile${i}`) as Sprite;
		feed.addChild(tile);
	}
}

setUpBoard();
createFeed();

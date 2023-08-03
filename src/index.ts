import { Application, BaseTexture, Container, Graphics, Sprite, Spritesheet, Text, Ticker } from 'pixi.js';
import { GRID_SIZE, NUMBER_OF_TILES, pipeSheet } from './constants';
import { getRandomLocation, getRandomTile } from './utils';

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

const ticker = Ticker.shared;
ticker.stop();
// let direction = "bottom";
let startingTile: Sprite;
let endingTile: Sprite;

const setUpBoard = () => {
	for (let i = 0; i < GRID_SIZE; i++) {
		for (let j = 0; j < GRID_SIZE; j++) {
			const square = new Sprite(spritesheet.textures.emptySquare)
			square.x = i * 16;
			square.y = j * 16;
			square.name = `${i}x${j}`;
			square.eventMode = 'static';
			square.on("pointerdown", () => {
				const tileSprite = tileFeed.getChildAt(0) as Sprite;
				square.texture = tileSprite.texture;
				square.eventMode = 'none';
				tileFeed.children.shift();
				tileFeed.children.map((tile) => {
					tile.y = tile.y + 18;
				})
				addNewTile();
			});
			container.addChild(square);
		}
	}

	startingTile = container.getChildByName(getRandomLocation(GRID_SIZE-2, GRID_SIZE-2)) as Sprite;
	startingTile.texture = spritesheet.textures.startDownEmpty;
	startingTile.addChild(new Sprite(spritesheet.textures.start));

	endingTile = container.getChildByName(getRandomLocation(GRID_SIZE-2, GRID_SIZE-2)) as Sprite;
	endingTile.texture = spritesheet.textures.startDownEmpty;
	endingTile.addChild(new Sprite(spritesheet.textures.end));
}

const createFeed = () => {
	const tileHighlight = new Graphics();
	tileHighlight.beginFill(0x000000);
	tileHighlight.drawRect(177, 106, 22, 21);
	container.addChild(tileHighlight);

	for (let i = NUMBER_OF_TILES; i >= 0; i--) {
		const tile = getRandomTile(spritesheet);
		tile.y = i * 18;
		tile.name = `tile${i}`;
		tileFeed.addChild(tile);
	}

	const text = new Text('← Next pipe to place', {
		fontSize: 12,
		fontFamily: "Georgia, serif",
	});
	text.x = 200;
	text.y = 110;
	container.addChild(text);
}

const addNewTile = () => {
	const tile = getRandomTile(spritesheet);
	tile.name="new";
	tileFeed.addChild(tile);
}

setUpBoard();
createFeed();

ticker.add(() => {
	if (ticker.lastTime > 10000) {
		startingTile.texture = spritesheet.textures.startDownFull;
	}
})
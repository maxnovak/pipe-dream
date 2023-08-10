import { Application, BaseTexture, Container, Graphics, Sprite, Spritesheet, Text, Ticker } from 'pixi.js';
import { GRID_SIZE, NUMBER_OF_TILES, TEN_SECONDS, pipeSheet } from './constants';
import { fillTile, getEmptyVersion, getRandomLocation, getRandomTile } from './utils';
import { Tile } from './types';

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
const board: Tile[][] = [[],[],[],[],[],[],[],[],[],[]];
let tiles: Tile[] = [];
let direction = "bottom";
let startingTile: Sprite;
let endingTile: Sprite;
let currentTile: Tile;
// let nextTile: Tile;

const setUpBoard = () => {
	for (let i = 0; i < GRID_SIZE; i++) {
		for (let j = 0; j < GRID_SIZE; j++) {
			const square = new Sprite(spritesheet.textures.emptySquare);
			square.x = i * 16;
			square.y = j * 16;
			square.name = `${i}x${j}`;
			square.eventMode = 'static';
			square.on("pointerdown", (event) => {
				const tileSprite = tileFeed.getChildAt(0) as Sprite;
				square.texture = tileSprite.texture;
				square.eventMode = 'none';
				tileFeed.children.shift();
				tileFeed.children.map((tile) => {
					tile.y = tile.y + 18;
				})
				const placedTile = tiles.shift();
				board[Math.floor(event.x / 16)][Math.floor(event.y / 16)] = placedTile!;
				addNewTile();
			});
			container.addChild(square);
			board[i][j] = {locationX: i, locationY: j, name: "empty", status: "empty"}
		}
	}

	startingTile = container.getChildByName(getRandomLocation(GRID_SIZE-2, GRID_SIZE-2)) as Sprite;
	startingTile.texture = spritesheet.textures.startDownEmpty;
	startingTile.addChild(new Sprite(spritesheet.textures.start));
	currentTile = {
		locationX: parseInt(startingTile.name![0]),
		locationY: parseInt(startingTile.name![2]),
		directions: ["bottom"],
		name: "startDown",
		status: "Empty"
	}

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
		const tile = getRandomTile();
		const emptyTile = getEmptyVersion(tile, spritesheet)
		emptyTile.y = i * 18;
		emptyTile.name = `tile${i}`;
		tileFeed.addChild(emptyTile);
		tiles.push({locationX:0, locationY: 0, name: tile, status:"Empty"});
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
	const tile = getRandomTile();
	const emptyTile = getEmptyVersion(tile, spritesheet)
	emptyTile.name="new";
	tileFeed.addChild(emptyTile);
	tiles.push({locationX:0, locationY: 0, name: tile, status: "Empty"});
}

setUpBoard();
createFeed();
let timer = 0;

const moveWater = () => {
	fillTile(container, spritesheet, currentTile);
	if (direction === "bottom") {
		currentTile.locationY += 1;
		currentTile.name = board[currentTile.locationX][currentTile.locationY].name
	}
	console.log(currentTile);
};

ticker.add(() => {
	timer += ticker.deltaMS;
	if (timer > TEN_SECONDS) {
		timer = 0;
		moveWater();
	}
});
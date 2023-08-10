import { Container, DisplayObject, Sprite, Spritesheet } from "pixi.js";
import { PIPE_TYPES } from "./constants";
import { Tile } from "./types";

export const getRandomLocation = (x: number, y: number): string => {
    return `${Math.floor(Math.random() * x+1)}x${Math.floor(Math.random() * y+1)}`;
}

export const getRandomTile = () => {
	return PIPE_TYPES[Math.floor(Math.random() * PIPE_TYPES.length)];
}

export const getEmptyVersion = (pipe: string, spritesheet: Spritesheet) => {
	return(new Sprite(spritesheet.textures[`${pipe}Empty`]));
}

export const fillTile = (container: Container<DisplayObject>, spritesheet: Spritesheet, tile: Tile) => {
	const tileToFill = container.getChildByName(`${tile.locationX}x${tile.locationY}`) as Sprite;
	const fullTextureName = tile.name + "Full"
	tileToFill.texture = spritesheet.textures[fullTextureName]
}
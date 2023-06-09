import { Sprite, Spritesheet } from "pixi.js";
import { PIPE_TYPES } from "./constants";

export const getRandomLocation = (x: number, y: number): string => {
    return `${Math.floor(Math.random() * x)}x${Math.floor(Math.random() * y)}`;
}

export const getRandomTile = (spritesheet: Spritesheet) => {
	const randomPipe = Math.floor(Math.random() * PIPE_TYPES.length);
	return(new Sprite(spritesheet.textures[`${PIPE_TYPES[randomPipe]}Empty`]));
}
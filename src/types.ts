export enum Direction {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
};
export type Pipes = "horizontal" | "vertical" | "bend1" | "bend2" | "bend3" | "bend4" | "empty" | "startDown";
export interface Tile {
    locationX: number,
    locationY: number,
    name: Pipes,
    status: string,
};
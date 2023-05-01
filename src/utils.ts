export const getRandomLocation = (x: number, y: number): string => {
    return `${Math.floor(Math.random() * x)}x${Math.floor(Math.random() * y)}`;
}
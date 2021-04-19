export const getRandomNumber = (min = 0, max: number) =>
	Math.floor(Math.random() * (max - min) + min);

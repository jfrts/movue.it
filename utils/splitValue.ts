export const splitValue = (value: number | string, padSize: number = 2) =>
	`${value}`.padStart(padSize, "0").split("");

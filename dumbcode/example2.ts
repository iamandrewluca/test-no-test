// https://1loc.dev/

function linearScale(
	value: number,
	inMin: number,
	inMax: number,
	outMin: number,
	outMax: number,
): number {
	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

linearScale(5, 0, 10, 0, 100); // ?
linearScale(10, 10, 20, 0, 100); // ?
linearScale(3, 0, 9, 0, 90); // ?

export {}; // Ignore

function average(arr: number[]): number {
	return arr.reduce((a, b) => a + b, 0) / arr.length;
}

average([1, 2, 3, 4, 5]); // ?

export {}; // Ignore

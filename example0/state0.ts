function getTotalLength(strings: string[]): number {
	return strings.reduce((total, str) => total + str.length, 0);
}

getTotalLength(["hello", "world"]); // ?
getTotalLength([1, 2, 3]); // ?

export {}; // Ignore

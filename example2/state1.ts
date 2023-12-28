function even(n: number) {
	return n % 2 === 0;
}

function square(n: number) {
	return n * n;
}

const numbers = [1, 2, 3, 4, 5];
const evenSquaredNumbers = numbers.filter(even).map(square);

evenSquaredNumbers; // ?

export {}; // Ignore

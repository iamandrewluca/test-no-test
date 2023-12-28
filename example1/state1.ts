type Product = {
	id: number;
	name: string;
	price: number;
};

const products: Product[] = [
	{ id: 1, name: "Apple", price: 1.2 },
	{ id: 2, name: "Banana", price: 0.5 },
];

function increaseProductPrice(p: Product): Product {
	return {
		...p,
		price: p.price * 1.1,
	};
}

function increaseProductsPrices(products: Product[]): Product[] {
	return products.map((p) => increaseProductPrice(p));
}

const updatedProducts = increaseProductsPrices(products);

updatedProducts[0]; // ?

export {}; // Ignore

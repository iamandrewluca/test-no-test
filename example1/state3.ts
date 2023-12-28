type Product = {
	id: number;
	name: string;
	price: number;
};

const products: Product[] = [
	{ id: 1, name: "Apple", price: 1.2 },
	{ id: 2, name: "Banana", price: 0.5 },
];

function increaseProductPrice(p: Product, by: number): Product {
	return {
		...p,
		price: p.price * by,
	};
}

const updatedProducts = products.map((p) => increaseProductPrice(p, 1.1));

updatedProducts[0]; // ?

export {}; // Ignore

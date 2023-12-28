function calculateDiscount(price, customerType) {
	if (customerType === "premium") {
		return price * 0.85; // 15% discount for premium customers
	}

	if (price > 1000) {
		return price * 0.9; // 10% discount for orders over $1000
	}

	return price;
}

type User = {
	id: number;
	name?: string;
	address?: {
		street: string;
		city?: string;
	};
};

const user: User = { id: 1, name: "John" };

const city = user.address?.city ?? "Unknown City";

city; // ?

export {}; // Ignore

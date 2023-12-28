// https://1loc.dev/

function groupBy<T extends Record<string, any>, K extends keyof T>(
	arr: T[],
	key: K,
): Record<string, T[]> {
	return arr.reduce(
		(acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
		{} as Record<string, T[]>,
	);
}

let result = groupBy(
	[
		{ branch: "audi", model: "q8", year: "2019" },
		{ branch: "audi", model: "rs7", year: "2020" },
		{ branch: "ford", model: "mustang", year: "2019" },
		{ branch: "ford", model: "explorer", year: "2020" },
		{ branch: "bmw", model: "x7", year: "2020" },
	],
	"branch",
);

result["audi"]; // ?

export {}; // Ignore

type Project = {
	id: string;
	slug: string;
	startedAt?: number;
};

const projects: Project[] = [
	{ id: "1", slug: "project-1", startedAt: 1609459200000 },
	{ id: "2", slug: "project-2", startedAt: 1609545600000 },
	{ id: "3", slug: "project-3", startedAt: undefined },
];

const startedProjects = projects.filter((p) => p.startedAt);

startedProjects.forEach((p) => {
	if (p.startedAt) {
		const diff = Date.now() - p.startedAt;
		console.log(`Project ${p.slug} started ${diff}ms ago`);
	}
});

export {}; // Ignore

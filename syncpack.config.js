// @ts-check

/** @type {import("syncpack").RcFile} */
export default {
	dependencyTypes: ["prod"],
	source: ["package.json", "packages/*/package.json"],
	sortFirst: ["name", "version", "private", "description", "type"],
	versionGroups: [
		{
			label: "Internal packages should be exact",
			packages: ["@poc/*"],
			dependencies: ["@poc/*"],
		},
	],
};

// @ts-check

/** @type {import("syncpack").RcFile} */
export default {
  dependencyTypes: ["dev", "prod", "peer"],
  source: [
    "package.json",
    "packages/*/package.json",
    "apps/*/package.json",
    "configs/*/package.json",
  ],
  sortFirst: ["name", "version", "private", "description", "type"],
  versionGroups: [
    {
      label: "Internal packages should be exact",
      packages: ["@poc/*"],
      dependencies: ["@poc/*"],
    },
  ],
}

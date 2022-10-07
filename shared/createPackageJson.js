import fs from "fs";

export function createPackageJson(
  sourcePackageJson,
  distPackageJsonFile,
  debug
) {
  const distPackageJsonData = JSON.stringify(
    {
      name: sourcePackageJson.name,
      version: debug
        ? sourcePackageJson.version + Date.now()
        : sourcePackageJson.version,
      description: sourcePackageJson.description,
      homepage: sourcePackageJson.homepage,
      bugs: sourcePackageJson.bugs,
      repository: sourcePackageJson.repository,
      license: sourcePackageJson.license,
      author: sourcePackageJson.author,
      type: "module",
      main: "index.js",
      types: "index.d.ts",
      dependencies: sourcePackageJson.dependencies,
      peerDependencies: sourcePackageJson.peerDependencies,
    },
    null,
    2
  );

  fs.writeFileSync(distPackageJsonFile, distPackageJsonData);
}

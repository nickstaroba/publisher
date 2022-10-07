import path from "path";
import filesize from "rollup-plugin-filesize";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";
import visualizer from "rollup-plugin-visualizer";

import { createPackageJson } from "../../shared/createPackageJson";
import sourcePackageJson from "./package.json";

const muiTheme = {
  input: "src/index.js",
  output: [
    {
      exports: "named",
      file: path.join(__dirname, "dist/index.js"),
      format: "es",
    },
  ],
  plugins: [
    peerDepsExternal(),
    terser(),
    filesize(),
    visualizer(),
    ts({
      tsconfig: "tsconfig.esm.json",
    }),
  ],
};

export default (configDebug) => {
  const distPackageJsonFile = path.join(__dirname, "dist/package.json");
  createPackageJson(sourcePackageJson, distPackageJsonFile, configDebug);
  return [muiTheme];
};

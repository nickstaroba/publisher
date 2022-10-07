import image from "@rollup/plugin-image";
import autoprefixer from "autoprefixer";
import path from "path";
import filesize from "rollup-plugin-filesize";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";

import { createPackageJson } from "../../shared/createPackageJson";
import sourcePackageJson from "./package.json";

const reactLibrary = {
  external: ["clsx"],
  input: "src/index.ts",
  output: [
    {
      exports: "named",
      file: path.join(__dirname, "dist/index.js"),
      format: "es",
    },
  ],
  plugins: [
    peerDepsExternal(),
    image(),
    terser(),
    filesize(),
    ts({
      tsconfig: "tsconfig.esm.json",
    }),
    postcss({
      modules: true,
      plugins: [autoprefixer],
      use: ["sass"],
    }),
  ],
};

export default (configDebug) => {
  const distPackageJsonFile = path.join(__dirname, "dist/package.json");
  createPackageJson(sourcePackageJson, distPackageJsonFile, configDebug);
  return [reactLibrary];
};

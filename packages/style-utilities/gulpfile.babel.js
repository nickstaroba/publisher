import del from "del";
import { dest, src } from "gulp";
import jsonEditor from "gulp-json-editor";

export const clean = () => del("./dist/**/*");

export const copy = () =>
  src("./package.json")
    .pipe(
      jsonEditor((json) => {
        const {
          devDependencies,
          scripts,
          private: _private,
          ...packageJson
        } = json;
        return packageJson;
      })
    )
    .pipe(dest("./dist"));

export const build = () => src("./src/**/*").pipe(dest("./dist"));

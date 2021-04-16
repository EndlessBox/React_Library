import pkg from "./package.json";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import babel from "@rollup/plugin-babel";

/*
 *  input   : Then entry point to the component(s) we want to bundle.
 *  output  :	This specifies the directory where we you want to save the bundled library
 *  plugins :	This specifies all the plugins you wish to use and their prespective configurations.
 * 						For instance, -external- is asking rollup to exclude -peerDependencies- as part of the bundle
 * 						as they will be imported separately by the app calling this package.
 */

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

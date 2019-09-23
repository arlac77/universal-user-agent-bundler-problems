import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const external = ["universal-user-agent", "@octokit/rest"];
const plugins = [resolve(), commonjs()];


export default [
  {
    output: {
      file: "dist/bundeled-with-wollup-cjs-external-workaround",
      format: "cjs"
    },
    plugins,
    external,
    input: "index.mjs"
  },
  {
    output: {
      file: "dist/bundeled-with-wollup-cjs-not-working",
      format: "cjs"
    },
    plugins,
    input: "index.mjs"
  }
];

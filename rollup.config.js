import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import virtual from "rollup-plugin-virtual";

const external = ["universal-user-agent"];
const plugins = [resolve(), commonjs()];

export default [
  {
    output: {
      file: "dist/bundeled-with-rollup-cjs-not-working",
      format: "cjs"
    },
    plugins,
    input: "index.mjs"
  },
  {
    output: {
      file: "dist/bundeled-with-rollup-cjs-external-workaround",
      format: "cjs"
    },
    plugins,
    external,
    input: "index.mjs"
  },
  {
    output: {
      file: "dist/bundeled-with-rollup-cjs-patched",
      format: "cjs"
    },
    plugins: [
      virtual({
        "universal-user-agent":
          "export function getUserAgent() {return `Node.js/${process.version.substr(1)} (${process.platform}); ${process.arch})`}"
      }),
      ...plugins
    ],
    input: "index.mjs"
  }
];

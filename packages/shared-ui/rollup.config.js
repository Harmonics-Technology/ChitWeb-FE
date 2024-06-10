// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// const packageJson = require("./package.json");
import packageJson from "./package.json" with { type: "json" };

export default [
  {
    input: "index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      // postcss(), 
    ],
    external: ["react", "react-dom", '@chakra-ui/react'],
  },
  {
    input: "index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [typeof dts === 'function' ? dts() : dts.default()],
  },
];
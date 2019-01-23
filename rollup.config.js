import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/index.js",
  sourcemap: true,
  name: "moses-uikit",

  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    },
    {
      file: "dist/index.es.js",
      format: "es",
    }
  ],

  plugins: [
    postcss({ extract: 'dist/moses-uikit.css' }),
    babel({
      exclude: "node_modules/**"
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    resolve(),
    commonjs()
  ],

  external: ["react", "react-dom"],

  globals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};

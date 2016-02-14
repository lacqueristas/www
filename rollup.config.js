import babel from "rollup-plugin-babel"

export default {
  entry: "./client/index.js",
  dest: "./tmp/client/index.js",
  format: "iife",
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ]
}

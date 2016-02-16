import babel from "rollup-plugin-babel"
import nodeResolve from "rollup-plugin-node-resolve"
import commonJS from "rollup-plugin-commonjs"

export default {
  entry: "./client/index.js",
  dest: "./tmp/client/index.js",
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    nodeResolve({
      jsnext: true
    }),
    commonJS({
      include: "node_modules/**"
    })
  ]
}

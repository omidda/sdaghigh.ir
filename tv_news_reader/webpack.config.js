clsvar nodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    externals: [nodeExternals()],
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js&/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    }
}
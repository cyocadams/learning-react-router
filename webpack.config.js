const path = require("path")
module.exports = {
    mode: "development",
    entry: __dirname + "/src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/js")
    },
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
}
const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./public/index.html`
        }),
        new moduleFederationPlugin({
            name: 'products',
            filename:remoteEntry.js,
            exposes: {
                "./ProductsIndex": "./src/index.js"
            }
        })
    ]
}
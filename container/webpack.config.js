const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: 'development',
    devServer:{
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new moduleFederationPlugin({
            name: container,
            remotes:{
                'products': 'products@http://localhost:8081'
            }
        })
    ]
}
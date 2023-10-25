import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export function buildPlugins(html: string): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin()
    ]
}
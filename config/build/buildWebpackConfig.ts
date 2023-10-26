import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig({mode, paths: { entry, build, html }, isDev, port}: BuildOptions): webpack.Configuration {
return ({
    mode,
    entry,
    output: {
        filename: '[name].[contenthash].js',
        path: build,
        clean: true
    },
    plugins: buildPlugins(html) ,
    module: {
        rules: buildLoaders()
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ? buildDevServer(port) : undefined
})
}
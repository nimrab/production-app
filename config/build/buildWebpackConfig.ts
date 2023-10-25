import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig({mode, isDev, paths: { entry, build, html }}: BuildOptions): webpack.Configuration {
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
})
}
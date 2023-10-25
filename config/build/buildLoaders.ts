import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    //важна последовательность лоадеров
    return [
        typescriptLoader,
    ]
}
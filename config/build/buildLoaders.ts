import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {types} from "sass";
import Boolean = types.Boolean;

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            //"style-loader", --> создаст стили как js модули

            isDev
                ? "style-loader"
                : MiniCssExtractPlugin.loader, //добавляем вместо style-loader, так стили будут помещены в отдельные css файлы

            // Translates CSS into CommonJS
            //"css-loader", --> если нет опций

            {
                loader: "css-loader",
                options: {
                    // modules:true  --> если нет опций, все scss файлы как модули

                    modules: {
                        //модули обрабатываем по имени, index.scss не трогаем
                        auto: /\.module\.\w+$/i,
                        //чтобы в дев режиме названия не превращались в обезличенный хеш
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    }
                }
            },


            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    //ts-loader умеет читать tsx, в противном случае используем babel
    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    //важна последовательность лоадеров
    return [
        typescriptLoader,
        cssLoader
    ]
}
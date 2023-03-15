const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');


console.log(__dirname)
 
    mode: 'development',
    entry: './src/main.js',

    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                ],
                            },
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html')
        }),
        new VueLoaderPlugin(),
    ],
    resolve:{
        extensions : ['.vue','.js']
    },
    devServer: {
        // static: {
        //     directory: './public',
        // },
        open:true,
        hot:true,
        compress: true,
        port: 9000
    }
}
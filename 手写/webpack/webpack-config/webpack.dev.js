const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

// const os =require('os')
// console.log(os.cpus())

// const fs = require('fs');
// fs.writeFileSync('./1.txt','客人')


module.exports = {
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
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      }
}
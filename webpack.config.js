const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    // 模式：开发 | 产品
    mode: "development",

    // 应用入口，单页面单入口，多页面多入口
    entry: {
        main: './src/js/index.js',
        // print: './src/print.js',
        // test: './src/test.js'
    },

    // 应用输出
    output: {
        // 文件名模板
        filename: '[name].bundle.js',
        // 所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist'),
        // 所有文件的目录
        // publicPath: '/'
    },

    // 模块配置
    module: {
        // 规则
        rules: [
            {
                // css 加载器
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|md)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            }
        ]
    },

    // 控制是否生成和如何生成 source map
    // source-map 主要用于生产环境调试使用
    devtool: 'inline-source-map',

    // 运行环境,默认是 web
    target: "web",

    // 扩展，暂时没搞清楚有啥用
    externals: {
        // jquery: 'jQuery'
        // vue:'Vue'
    },

    devServer: {
        // contentBase: './dist',
        hot: true,
        // port: 12345,
        compress: true
    },


    plugins: [
        new CleanWebpackPlugin(['dist']),
        // 生成 html 插件
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.html' // 模板
        }),
        // 用于静态文件拷贝
        new CopyWebpackPlugin([
            // {
            //     from: path.resolve(__dirname, './doc'),//静态资源目录源地址
            //     to: path.resolve(__dirname, './dist/doc') //目标地址，相对于output的path目录
            // },
            {
                from: path.resolve(__dirname, './Interview'),//静态资源目录源地址
                to: path.resolve(__dirname, './dist/Interview') //目标地址，相对于output的path目录
            },
            {
                from: path.resolve(__dirname, './img'),//静态资源目录源地址
                to: path.resolve(__dirname, './dist/img') //目标地址，相对于output的path目录
            },
            {
                from: path.resolve(__dirname, './web.config'),//静态资源目录源地址
                to: path.resolve(__dirname, './dist/web.config') //目标地址，相对于output的path目录
            }
        ]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

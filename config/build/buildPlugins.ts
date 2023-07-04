import HtmlWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config"
import { WebpackPluginInstance } from "webpack"
import { webpack } from "webpack"
// import { ProgressPlugin } from "webpack"
import  MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildPlugins({paths}:BuildOptions) : WebpackPluginInstance  []{

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        // new webpack.ProgressPlugin()  , 
        new  MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })      
 
    ]
}
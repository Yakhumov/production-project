import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import { WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV: JSON.stringify(isDev),
    }),

    new HotModuleReplacementPlugin()
    ];
  }
  
        //  if(isDev){
        //   plugins.push(new ReactRefreshWebpackPlugin()),
        //   pluginSymbol.push(new HotModuleReplacementPlugin())
        //  }
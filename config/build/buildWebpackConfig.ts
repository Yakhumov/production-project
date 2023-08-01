import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve"; 
import { buildDewserver } from "./buildDevSerwer";

export function buildWebpackConfig(options: BuildOptions){

    const {mode, paths, isDev} = options

    return   {  
        mode: mode,
        entry: paths.entry, 
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        module: {
          rules:  buildLoaders(options),
        },
          resolve: buildResolve(options) ,
          devtool: isDev ? 'inline-source-map' : undefined,
          devServer:  isDev ? buildDewserver(options) : undefined
      };
}
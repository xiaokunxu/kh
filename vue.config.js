const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                import: [
                    path.join(__dirname, './src/assets/css/variables.styl')
                ]
            }
        }
    },
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 静态资源目录(js, css, img, fonts)
    assetsDir: 'static',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        // 修复 HMR
        config.resolve.symlinks(true)
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    configureWebpack: config => {
        // if(process.env.NODE_ENV === 'production'){
        //     return {
        //         optimization: {
        //             splitChunks: {
        //                 vue: {
        //                     test (chunks){
        //                         return chunks.resource && chunks.resource.includes('node_modules') && chunks.resource.includes('vue')
        //                     },
        //                     chunks: 'initial',
        //                     name: 'vue',
        //                     priority: 10
        //                 },
        //                 vendor: {
        //                     chunks: 'initial',
        //                     name: 'vendor',
        //                     minSize: 0
        //                 }
        //             }
        //         }
        //     }
        // }
        Object.assign(config, {
            resolve: {
                alias: { // 设置别名路径
                    'components': path.resolve(__dirname, './src/components'),
                    'view': path.resolve(__dirname, './src/views'),
                    'assets': path.resolve(__dirname, './src/assets'),
                    'api': path.resolve(__dirname, './src/api')
                }
            }
        })
    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        //  extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true, // process.platform === 'darwin'
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: { // 设置代理
            '/Container': {
                target: 'http://47.112.4.25/testB',
                ws: true,
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/Container': '/'
                }
            }
        },
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}
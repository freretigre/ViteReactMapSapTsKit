import {resolve} from 'path'                      // 路径
import {defineConfig} from 'vite'                 // 配置相关方法参数 defineConfig
import react from '@vitejs/plugin-react'            // 使用 react
import usePluginImport from 'vite-plugin-importer'  // antd 按需加载

// 自定义打包的静态目录名称
const mkdirName = 'static';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        // // 配置别名
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    css: {
        modules: { // * css模块化 文件以.module.[css|less|scss]结尾
            generateScopedName: '[name]_[local]_[hash:base64:5]',
            hashPrefix: 'prefix',
        },
        preprocessorOptions: { //* 预编译支持css/less/scss
            css: {
                javascriptEnabled: true, // css 支持内联 JavaScript
            },
            less: {
                javascriptEnabled: true, // less 支持内联 JavaScript
            },
            scss: {
                javascriptEnabled: true,  // scss 支持内联 JavaScript
            },
        },
    },
    plugins: [
        react(),                  // 使用 react
        usePluginImport({         // antd 按需加载
            libraryName: "antd",
            libraryDirectory: "es",
            style: 'css',           // true 是开启 less
        }),
    ],
    build: {
        rollupOptions: {
            input: { // 多页面配置， 如果有需求，就在这里配置，如果不需要，可以把 input 这里删除掉
                main: resolve(__dirname, 'index.html'),
                // home: resolve(__dirname, "src/home/index.html"),
                // about: resolve(__dirname, "src/about/index.html"),
            },
            output: { // 资源打包分类
                chunkFileNames: `${mkdirName}/js/[name]-[hash].js`,
                entryFileNames: `${mkdirName}/js/[name]-[hash].js`,
                assetFileNames: `${mkdirName}/[ext]/[name]-[hash].[ext]`,
            },
        },
        assetsDir: mkdirName, // 默认： assets 目录
        terserOptions: { // 生产环境移除console
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    server: {
        port: 8089, // 默认端口号是 3000，这里我修改成 8088，主要是为了不和其它框框架端口号发生冲突
        cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
        hmr: {
            overlay: false, // 设置 server.hmr.overlay 为 false 可以禁用开发服务器错误的屏蔽。
        },
        proxy: { // 代理配置
            // 字符串简写写法
            '/foo': 'http://localhost:4567',
            // 选项写法
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // 正则表达式写法
            '^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, '')
            },

        }
    }
});

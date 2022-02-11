# vitereactmapsaptskit 脚手架说明

# 本脚手架使用到的如下库
```
react antd ts cssModule less/scss react-router-dom-v6.0 @reduxjs/toolkit react-redux 

```

# antd 按需加载配置说明文档 
```
https://github.com/ajuner/vite-plugin-importer
```
# package.json 配置文件
```shell
{
  "name": "vitereactmapsaptskit",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^1.7.1",
    "@types/express": "^4.17.13",
    "@types/react-redux": "^7.1.22",
    "@types/redux-devtools-extension": "^2.13.2",
    "@types/redux-logger": "^3.0.9",
    "antd": "^4.18.5",
    "express": "^4.17.2",
    "normalize.css": "^8.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.2.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.4.1",
    "vite-plugin-importer": "^0.2.5"
  },
  "devDependencies": {
    "@types/node": "^17.0.13",
    "@types/react-dom": "^17.0.10",
    "@vitejs/plugin-react": "^1.0.7",
    "less": "^4.1.2",
    "sass": "^1.49.0",
    "stylus": "^0.56.0",
    "typescript": "^4.4.4",
    "vite": "^2.7.2"
  }
}

```

# TS 配置文件
- tsconfig.json
```shell
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "types": ["node"] // https://www.typescriptlang.org/tsconfig#types
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

# tsconfig.node 配置文件
```shell
{
  "compilerOptions": {
    "composite": true,
    "module": "esnext",
    "moduleResolution": "node"
  },
  "include": ["vite.config.ts"]
}
```

# vite 配置文件的说明
- `vite.config.ts`
```js
import { resolve } from 'path'                      // 路径
import { defineConfig } from 'vite'                 // 配置相关方法参数 defineConfig
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
    css:{
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
        port: 8088, // 默认端口号是 3000，这里我修改成 8088，主要是为了不和其它框框架端口号发生冲突
        proxy: {
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

```


```
── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.scss          # 全局样式
│   └── main.tsx             # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json


src
├── components
└── pages
    ├── Welcome        // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── components // 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
    |   ├── Form.tsx
    |   ├── index.tsx  // 页面组件的代码
    |   └── index.less // 页面样式
    ├── Order          // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── index.tsx
    |   └── index.less
    ├── user           // 一系列页面推荐通过小写的单一字母做 group 目录
    |   ├── components // group 下公用的组件集合
    |   ├── Login      // group 下的页面 Login
    |   ├── Register   // group 下的页面 Register
    |   └── util.ts    // 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
    └── *              // 其它页面组件代码

```
# vitereactmapsaptskit 脚手架说明
- https://frontendmasters.com/

# 本脚手架使用到的如下库
```
react antd ts cssModule less/scss react-router-dom-v6.0 @reduxjs/toolkit react-redux redux-Saga rxjs

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

# Git 分支命名规范
```html
git 分支命名规范
git 分支命名规范 为规范开发，保持代码提交记录以及 git 分支结构清晰，方便后续维护，现规范 git 的相关操作。
主要规范两点：
一.git 分支命名规范
git 分支分为集成分支、功能分支和修复分支，分别命名为 develop、feature 和 hotfix，均为单数。不可使用 features、future、hotfixes、hotfixs 等错误名称。
1.git主分支(master)。它是自动建立，用于发布重大版本更新

2.git开发主分支(develop)。日常开发在此分支上进行

3.git临时性分支：用于应对一些特定目的的版本开发(验证OK后，应该删除此分支)，主要有： 　

功能（feature）分支：它是为了开发某种特定功能，从Develop分支上面分出来的。开发完成后，要再并入Develop。可以采用feature-的形式命名。
预发布（release）分支：指发布正式版本之前（即合并到Master分支之前），我们可能需要有一个预发布的版本进行测试。预发布分支是从Develop分支上面分出来的，预发布结束以后，必须合并进Develop和Master分支。它的命名，可以采用release-的形式
修补bug（hotfix）分支：软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。修补bug分支是从Master分支上面分出来的。修补结束以后，再合并进Master和Develop分支。它的命名，可以采用hotfix-***的形式。
注意事项： 一个分支尽量开发一个功能模块，不要多个功能模块在一个分支上开发。 feature 分支在申请合并之前，最好是先 pull 一下 develop 主分支下来，看一下有没有冲突，如果有就先解决冲突后再申请合并。
二.git 提交记录规范
每个 git commit 记录都需要按照固定格式，具体格式为： 第一行：作者: 功能模块名称（或 功能模块ID） 第二行：提交描述，中英文皆可 + ： 增加代码 * ： 修改代码 - ： 删除代码
```
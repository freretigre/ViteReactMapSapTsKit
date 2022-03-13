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

# react-v18
```jsx
大家好，我是 ConardLi，今天给大家带来一个令人兴奋的消息：React 18 RC 版本发布啦！

去年6月份 React 18 发布 alpha 版本的时候，我已经第一时间试用，并且给大家分享了一波：【第一批吃螃蟹】试用 React 18 ！

不过 alpha 毕竟还是属于内部测试版本，可能还包括一些 bug，功能也有很多没放出来，大家不能在生产里去用。

这次发布的是 RC 版本(Release Candidate候选版本）：基本和最终发布的 stable 版本一样，功能上不会再有太大变化，也更加稳定，大家可以尝试在生产环境里用起来了 ～

安装
安装最新的 React 18 RC 版本：

npm install react@rc react-dom@rc
客户端渲染 API 的更新
如果你是第一次安装 React 18 ，可能会在控制台看到一个警告：

Use createRoot instead. Until you switch to the new API, your app will behave as if it’s running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
这是因为 React 18 中引入了一个新的 Root API，它支持了最新的 concurrent renderer，让你可以自己决定是否启用并发渲染的能力。

// 以前
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// 现在
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
同时，unmountComponentAtNode 也改为了 root.unmount：

// 以前
unmountComponentAtNode(container);

// 现在
root.unmount();
另外，React 还将之前 render 函数的回调函数干掉了，因为通常它在配合 Suspense 一起使用的时候得不到预期的效果：

// 以前
const container = document.getElementById('app');
ReactDOM.render(<App tab="ConardLiHome" />, container, () => {
  console.log('rendered');
});

// 现在
function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

return <App tab="ConardLiHome" />
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);
还有一点， 如果你之前用了带 hydrate 的服务端渲染，需要升级到：hydrateRoot：

// 以前
import { hydrate } from 'react-dom';
const container = document.getElementById('app');
hydrate(<App tab="home" />, container);

// 现在
import { hydrateRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = hydrateRoot(container, <App tab="home" />);
服务端渲染 API 的更新
在这个版本中，React 为了完全支持服务端的 Suspense 和流式SSR，改进了 react-dom/server 的 API，旧的 Node.js 流式 API 将会被完全弃用：

renderToNodeStream 弃用⛔️️，使用时将发出警告。
对应新版 Node 环境的流式传输 API 为：renderToPipeableStream。
另外，React 在这个版本还引入了新的 renderToReadableStream 来支持 Deno、Cloudflare worker 等其他环境的流式 SSR 和 Suspense。

renderToString、renderToStaticMarkup 这两个 API 还可以继续用，但是对 Suspense 支持就不那么友好了。

想了解更多，可以看 React 18 官方工作组的博客：https://github.com/reactwg/react-18/discussions/22
批处理
React 中的批处理简单来说就是将多个状态更新合并为一次重新渲染，由于设计问题，在 React 18 之前，React 只能在组件的生命周期函数或者合成事件函数中进行批处理。默认情况下，Promise、setTimeout 以及其他异步回调是无法享受批处理的优化的。

// React 18 之前

function handleClick() {
  setCount(c => c + 1);
  setName('ConardLi');
  // 在合成事件中，享受批处理优化，只会重新渲染一次
}

setTimeout(() => {
  setCount(c => c + 1);
  setName('ConardLi');
  // 不会进行批处理，会触发两次重新渲染
}, 1000);
从 React 18 开始，如果你使用了 createRoot，所有的更新都会享受批处理的优化，包括Promise、setTimeout 以及其他异步回调函数中。

// React 18 

function handleClick() {
  setCount(c => c + 1);
  setName('ConardLi');
  // 只会重新渲染一次
}

setTimeout(() => {
  setCount(c => c + 1);
  setName('ConardLi');
  // 只会重新渲染一次
}, 1000);
如果你有特殊的渲染需求，不想进行批处理，也可以使用 flushSync 手动退出：

import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCounter(c => c + 1);
  });
  // 更新 DOM
  flushSync(() => {
    setFlag(f => !f);
  });
  // 更新 DOM
}
想了解更多可以看 React 18 官方工作组的博客：https://github.com/reactwg/react-18/discussions/21
用于第三方库的 API
React 18 的更新机制对于很多第三方 React 库都是阻断性的，如果想要适配 React 18，这些库可能要通过下面这些 API 做一些改造：

useId 是一个新的 Hook，用于在客户端和服务端生成唯一id，同时避免 hydration 的不兼容，这可以解决 React 17 以及更低版本的问题。
useSyncExternalStore 是一个新的 Hook，它允许外部存储通过强制同步更新来支持并发读取。推荐把这个新的 API 推荐应用到任何与 React 外部状态集成的库。
useInsertionEffect 是一个新的 Hook，它可以解决 CSS-in-JS 库在渲染中动态注入样式的性能问题。
放弃对 IE 的支持
图片
在这个版本中，React 正式放弃了对 Internet Explorer 的支持。如果你的业务在 IE 还有用户，只能继续使用 React 17 及以下的版本了～。

如果大家想了解更多内容，欢迎查看 React 官方博客：https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
```

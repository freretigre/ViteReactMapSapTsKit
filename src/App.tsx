import { useState } from 'react'
import { Button } from 'antd'
import logo from '@/assets/img/logo.svg'

import './App.css'

import styles from './App.module.css'


// let URL: new (url: string | URL, base?: string | URL | undefined) => URL;


// 推倒
declare global {
  interface Window {
    configGlobals: {
      logo: string;
    };
  }
}


function App(): JSX.Element {
  const [count, setCount] = useState(0);
  // 使用全局的配置文件
  const configGlobals = window["configGlobals"];

  console.log("========: ", configGlobals);
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.App}>Hello Vite + React!!!!!!</p>
        <div><img src={configGlobals.logo} className="App-logo" alt="logo" /></div>
        <p>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p><Button>Button</Button></p>
        <div>
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

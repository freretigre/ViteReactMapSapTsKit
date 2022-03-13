import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { rootStore } from "./models/store";
import './global.scss'
import Routers from "./routers";


const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
      <Provider store={rootStore}>
          <Routers />
      </Provider>
  </React.StrictMode>,
);

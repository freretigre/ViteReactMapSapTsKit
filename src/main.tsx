import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { rootStore } from "./models/store";
import './global.scss'
import Routers from "./routers";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={rootStore}>
          <Routers />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

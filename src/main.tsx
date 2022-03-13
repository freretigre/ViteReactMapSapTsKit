import { StrictMode } from 'react'
import { hydrate } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { rootStore } from "./models/store";
import './global.scss'
import Routers from "./routers";


const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
if(container?.hasChildNodes()){
  hydrate(
    <StrictMode>
        <Provider store={rootStore}>
            <Routers />
        </Provider>
    </StrictMode>, 
    container
  );
}else{
  root.render(
    <StrictMode>
        <Provider store={rootStore}>
            <Routers />
        </Provider>
    </StrictMode>,
  );
}





/* const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
      <Provider store={rootStore}>
          <Routers />
      </Provider>
  </React.StrictMode>,
);
 */
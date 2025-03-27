import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from "./store.js";
import Pageroutes from './routes.jsx';
console.log("Redux Store Initial State:", store.getState());
createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <Pageroutes/>
    </Provider>

)

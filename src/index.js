import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'

import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));
    
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Store } from './Store';
ReactDOM.render(
   <Provider store = { Store } ><App /></Provider>,
     document.getElementById('root')
);
registerServiceWorker();
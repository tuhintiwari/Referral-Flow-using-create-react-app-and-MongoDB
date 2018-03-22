// houses little bit of our redux setup

import materializeCSS from 'materialize-css/dist/css/materialize.min.css'     // when no relative path, webpack assumes node_modules directory
import React from 'react';          // using import for frontend because we are using webpack and babel
import ReactDOM from 'react-dom';   // while backend uses node.js which needs 'requires' because it uses Common.js
import { Provider } from 'react-redux';   //Provider tag by redux library to connect redux with React
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));           // dummy reducer

ReactDOM.render(                       // root div in index.html in public folder is where our component will be rendered
    <Provider store ={store}><App /></Provider>,                          // App is jsx tag. ReactDOM.render expects a component instance which we create using jsx
    document.querySelector('#root')); // second argument is reference to root div

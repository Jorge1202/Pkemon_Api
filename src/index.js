import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware ,compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { pokemonsReducer } from './Reducers/Pokemons';
import { logger } from './Middlewares';



import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
const composeAlternativo = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlternativo(
  applyMiddleware(thunk, logger)
)

const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

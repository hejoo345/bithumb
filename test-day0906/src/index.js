import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import rootReducer, {rootSaga} from './module/rootReducer';

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// saga 연결자 역할 interface 생성
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware]})

// saga 실행
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

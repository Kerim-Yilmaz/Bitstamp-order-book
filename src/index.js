import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './createStore';
import 'bootstrap/dist/css/bootstrap.min.css';
const app= (
    <Provider store={store}>
    <App />
    </Provider>
)


ReactDOM.render(app,document.getElementById('root')
);


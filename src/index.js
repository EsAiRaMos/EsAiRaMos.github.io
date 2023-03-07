import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // add import for HashRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root'); // remove the ReactDOM.render call
ReactDOM.render(
<React.StrictMode>
<HashRouter>
<App />
</HashRouter>
</React.StrictMode>,
root // render the App component to the root element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
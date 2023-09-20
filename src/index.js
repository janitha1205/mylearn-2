import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";// attached bookstrapt 
import Counter from './component/counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <App/>
);

//Couter object created show the detail that 'include in a statement under counter
reportWebVitals();

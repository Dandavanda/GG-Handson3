import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/home';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import gif from './data/data2';
import Form from './components/form/index'
import Images from './components/images';

ReactDOM.render(
  <React.StrictMode>
    <Form/>
    <Images urlImg={gif.url} titleImg={gif.title}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/video-studio">
      
        <App />
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

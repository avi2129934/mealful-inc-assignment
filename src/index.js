import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyChart from './Show_Chart';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
      <MyChart/>
  </React.StrictMode>,
  document.getElementById('chart')
)
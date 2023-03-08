import DatePcker from './DatePcker';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { get_dates } from './functions';
import MyChart from './MyChart';
import TopBar from './topbar';
// import get_dates from './functions';

function App() {
  const [data,setdata] = useState([]);
  const update = () =>{
    setdata(get_dates);
  }
  return (
    <div className="App">
      <div className='row' id = 'topbar'>
        {TopBar()}
      </div>
      <div className='row' id = 'bodyview'>
        <div className='col-12' id = "date_picker">
          {DatePcker()}
          <button type = "button" id = 'submit_button' className='btn' onClick={update}>Submit</button>
        </div>
        <div className='col-12' id = "mychart_element">{MyChart(data)}</div>
      </div>
    </div>
  )
}
export default App;

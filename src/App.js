import DatePcker from './DatePcker';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { get_dates } from './functions';
import MyChart from './MyChart';
// import get_dates from './functions';

function App() {
  const [data,setdata] = useState([]);
  const update = () =>{
    setdata(get_dates);
  }
  return (
    <div className="App">
      <header>Internship Assignment</header>
      <div className='row'>
        <div className='col-12'> {DatePcker()} </div>
        <div className='col-12'><button type = "button" className='btn btn-primary' onClick={update}>Submit</button></div>
        <div className='col-12'>{MyChart(data)}</div>

        {/* <div className='col-12'>{NewChart(data)}</div> */}
      </div>
    </div>
  );
}
export default App;

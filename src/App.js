import DatePcker from './DatePcker';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import MyChart from './Show_Chart';
// import get_dates from './functions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [state,setstate] = useState();
  return (
    <div className="App">
      <header>Internship Assignment</header>
      <div className='row'>
        <div className='col-12'> {DatePcker()} </div>
        <div className='col-12'><button type = "button" className='btn btn-primary' style = {{margin : 10}} onClick={() => setstate()}>Submit</button></div>
      </div>
    </div>
  );
}
export default App;

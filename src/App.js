import DatePcker from './DatePcker';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import get_dates from './functions';

function App() {
  return (
    <div className="App">
      <header>Internship Assignment</header>
      <div className='row'>
        <div className='col-12'> {DatePcker()} </div>
      </div>
    </div>
  );
}
export default App;

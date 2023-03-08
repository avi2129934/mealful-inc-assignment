import React, { useState } from 'react';
import {groupTimesBySlot} from './functions';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import NewChart from './NewChart';
import 'bootstrap/dist/css/bootstrap.min.css';


const colors = ['#fcde67'];

function MyChart(data) { 
  const [timedata,settimedata] = useState([]);
  const update = (index) =>{
    const temp = groupTimesBySlot(index.time);
    settimedata(temp);
    // console.log(timedata);
  }
  return (
    <div className='row'>
      <div className='col-12 col-lg-6'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
          width= {100+data.length*100}
          height={400}
          data= {data}
          margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sched_date" label = {{rotate : '90deg'}}/>
          <YAxis />
          <Bar dataKey="time.length" fill="#8884d8" label={{ position: 'top' }} onClick={update}>
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[0]} />
              ))}
          </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='col-12 col-lg-6'>
        {NewChart(timedata)}
      </div>
    </div>
  );
}

export default MyChart;
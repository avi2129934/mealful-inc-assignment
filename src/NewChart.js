import React from 'react';
// import {get_dates, groupTimesBySlot} from './functions';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';


const colors = ['#5bccf6'];

function NewChart(timedata) {
  const data = timedata;
  return (
    <div className='row' style={{textAlign:'center'}}>
        <div className='col-12'>
          <ResponsiveContainer width="100%" height={300} textAlign='center'>
            <BarChart
            width= {100+(data.length*100)}
            height={300}
            data= {data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sched_slot" />
            <YAxis />
            <Bar dataKey="value" fill="#8884d8" label={{ position: 'top' }} >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[0]} />
                ))}
            </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
}

export default NewChart;
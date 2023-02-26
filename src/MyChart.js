import React, { useState } from 'react';
import get_dates from './functions';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function MyChart() {
  const [data, setdata] = useState([]);
  const update = () =>{
    setdata(get_dates);
  };

  return (
    <div className='row' style={{textAlign:'center'}}>
        <div className='col-12'><button type = "button" className='btn btn-primary' onClick={update}>Submit</button></div>
        <div className='col-12' style = {{color:'blue',overflow:'scroll'}}>
          <BarChart
          width= {500}
          height={300}
          data={data}
          margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sched_date" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
          </Bar>
          </BarChart>
        </div>
    </div>
  );
}

export default MyChart;
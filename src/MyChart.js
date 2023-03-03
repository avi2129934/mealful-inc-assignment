import React, { useState } from 'react';
import {groupTimesBySlot} from './functions';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import NewChart from './NewChart';
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

function MyChart(data) { 
  const [timedata,settimedata] = useState([]);
  const update = (index) =>{
    const temp = groupTimesBySlot(index.time);
    settimedata(temp);
    // console.log(timedata);
  }
  return (
    <div className='row' style={{textAlign:'center'}}>
      <div className='col-6'>
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
          <XAxis dataKey="sched_date" />
          <YAxis />
          <Bar dataKey="time.length" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }} onClick={update}>
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
          </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='col-6'>
        {NewChart(timedata)};
      </div>
    </div>
  );
}

export default MyChart;
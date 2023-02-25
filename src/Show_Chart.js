import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && chartRef.current) {
      let myChart = null;
  
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
  
      const chartData = {
        labels: data.map(item => item.name),
        datasets: [
          {
            label: 'Values',
            data: data.map(item => item.value),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      };
  
      myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
  
      return () => {
        if (myChart) {
          myChart.destroy();
        }
      };
    }
  }, [data]);
  

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
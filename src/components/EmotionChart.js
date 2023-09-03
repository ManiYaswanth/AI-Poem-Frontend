import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmotionChart = ({ emotions }) => {
    const hasData = emotions && Object.keys(emotions).length > 0 ;
  const data = {
    labels: Object.keys(emotions),
    datasets: [
      {
        data: Object.values(emotions),
        backgroundColor: ['#FF9999', '#99FF99', '#CC99FF', '#99CCFF'],
      },
    ],
  };

  return (
    <div className="emotion-chart">
        <h3>Emotions Chart</h3>
        {hasData? (<Pie data={data} />) : 
            <p>Error in generating chart</p>
        }
    </div>
  );
};

export default EmotionChart;

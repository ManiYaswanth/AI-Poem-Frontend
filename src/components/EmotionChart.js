import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmotionChart = ({ emotions }) => {
  const data = {
    labels: Object.keys(emotions),
    datasets: [
      {
        data: Object.values(emotions),
        backgroundColor: ['red', 'blue', 'green', 'yellow'],
      },
    ],
  };

  return (
    <div className="emotion-chart">
      <Pie data={data} />
    </div>
  );
};

export default EmotionChart;

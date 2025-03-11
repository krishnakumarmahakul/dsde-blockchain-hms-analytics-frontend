import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data (Histogram bins)
const data = [
  { range: '0-10', count: 4 },
  { range: '10-20', count: 8 },
  { range: '20-30', count: 15 },
  { range: '30-40', count: 10 },
  { range: '40-50', count: 6 },
  { range: '50-60', count: 3 },
  
];

// Styled Container for the chart
const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 10px;
`;

const Histogram = () => {
  return (
    <ChartContainer>
      <div>
        <Title>Histogram of Data Distribution</Title>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" label={{ value: "Range", position: "insideBottom", dy: 10 }} />
          <YAxis label={{ value: "Count", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </ChartContainer>
  );
};

export default Histogram;

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Recharts = () => {
    const data = [
        {
          name: "Page A",
          Marks: 4000,
          quizs: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          Marks: 3000,
          quizs: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          Marks: 2000,
          quizs: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          Marks: 2780,
          quizs: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          Marks: 1890,
          quizs: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          Marks: 2390,
          quizs: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          Marks: 3490,
          quizs: 4300,
          amt: 2100
        }
      ];
    return (
        <div>
            <LineChart width={500} height={300} data={data}
            margin={{top: 5,right: 30,left: 20,bottom: 5 }}> 

            <Line type="monotone" dataKey="Marks" stroke="#8884d8" activeDot={{ r: 8 }} />

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

      </LineChart>
        </div>
    );
};

export default Recharts;
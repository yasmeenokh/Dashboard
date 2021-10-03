import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 3000,
    pv: 5000,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1500,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Chart() {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='natural'
          dataKey="pv"
          stroke="#4ecdc4"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" 
        dataKey="uv" 
        stroke="#ff6b6b" 
        />
         <Line type="monotone" 
        dataKey="amt" 
        stroke="#ffc658" 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

import React from 'react'
import './chart.scss'
import  PureComponent  from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export default function Chart(props) {
  const data = [
    {
      "name": "January",
      "Booking": 4000,
      "Revenue": 2400,
      
    },
    {
      "name": "February",
      "Booking": 3000,
      "Revenue": 1398,
      "amt": 2210
     
    },
    {
      "name": "March",
      "Booking": 2000,
      "Revenue": 9800,
      "amt": 2290
    },
    {
      "name": "April",
      "Booking": 2780,
      "Revenue": 3908,
      "amt": 2000
    },
    {
      "name": "June",
      "Booking": 2780,
      "Revenue": 3908,
      "amt": 2000
    },

  ]
  return (
    <div className='chart'>   
    <div className="title">{props.title}</div>
    <ResponsiveContainer width="100%" aspect={2/1}/>
<AreaChart width={400} height={200} data={data} className='chartdata'
  margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name"  stroke='gray' fontSize={10} />
  <Tooltip />
  <Area type="monotone" dataKey="Booking" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </div>
  )
}

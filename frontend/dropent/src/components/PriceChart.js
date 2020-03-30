// Chart for aggregated prices
import React, { Component } from 'react';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
      {name: '3/23', uv: 3.99, pv: 2400, amt: 3.99},
      {name: '3/24', uv: 3.99, pv: 1398, amt: 3.99},
      {name: '3/25', uv: 4.29, pv: 9800, amt: 4.29},
      {name: '3/26', uv: 2.99, pv: 3908, amt: 2.99},
      {name: '3/27', uv: 3.99, pv: 4800, amt: 3.99},
      {name: '3/28', uv: 3.59, pv: 3800, amt: 3.59},
      {name: '3/29', uv: 3.99, pv: 4300, amt: 3.99},
];

function PriceChart() {
  return(
    <AreaChart width={600} height={400} data={data}
               margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Area type='monotone' dataKey='uv' stroke='#1f1f60' fill='#79a4d2' />
    </AreaChart>
  );
}


export default PriceChart;

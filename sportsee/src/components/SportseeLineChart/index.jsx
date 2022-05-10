import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';

function SportseeLineChart({Data}){

  const renderLineChart = (
    
    <LineChart
    width={230}
    height={230}
    data={Data}
    margin={{
      top: 20,
      right: 20,
      left: 20,
      bottom: 20,
    }}
  >

    <XAxis 
      dataKey="name" 
      tickLine={false}
      tickSize={15}
      axisLine={false}
      tick={{fill: '#ffffff'}}
    />

    <Tooltip />

    <Line 
      type="monotone" 
      dataKey="pv" 
      stroke="#ffffff" 
      activeDot={{ r: 8 }}
      dot={false} />
  
  </LineChart>

  )
  return(
    <section className='average-graph'>
        {/* <p className='activity-graph--name'>Activité quotidienne</p> */}
        
        {renderLineChart}
      
    </section>
    
)
}
export default SportseeLineChart
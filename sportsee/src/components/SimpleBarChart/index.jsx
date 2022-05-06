
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import React from 'react'

function SimpleBarChart({Data}){
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 500, pv: 1400, amt: 1400}];
    
    const renderColorfulLegendText = (value) => {
        return <span style={{ color:"#74798C", marginLeft:".7rem", marginRight:"2rem" }}>{value}</span>;
    }

    const renderLineChart = (
        
        
        //  <ResponsiveContainer width="100%" height="100%"> 
            <BarChart 
                width={730} 
                height={250} 
                data={Data}
                barCategoryGap="37%"
                barGap="5%"
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
                <CartesianGrid 
                    strokeDasharray="1 3" 
                    vertical={false}
                    
                />
                <XAxis 
                    dataKey="name"
                    tickLine={false}
                    tickSize={15}
                
                />
                <YAxis 
                    yAxisId="kg"
                    orientation='right' 
                    dataKey={'pv'}  
                    // type="number" 
                    domain={[73, 82]} 
                    tickLine={false}
                    tickSize={15}
                    tick={{stroke: '#9B9EAC', strokeWidth: 0}}
                    
                />
                <YAxis 
                    yAxisId="kcal"
                    orientation='right' 
                    dataKey={'pv'}  
                    // type="number" 
                    domain={[100, 400]} 
                    tickLine={false}
                    tickSize={15}
                    hide={true}
                    tick={{stroke: '#9B9EAC', strokeWidth: 0}}
                    
                />
                <Tooltip 
                    filterNull={false}
                    separator=""
                    itemStyle={{
                        color:"white",
                        backgroundColor: "#E60000", 
                        fontSize:".6rem", 
                        padding: "0rem",
                        margin: 0,
                        border: 0
                    }} 
                    formatter={
                        (name, value) => [name, ""] 

                    }
                    contentStyle={{
                        padding: ".5rem",
                        backgroundColor: "#E60000", 
                        border: 0
                    }}
                    labelStyle={{
                        display: "none"
                    }}
                    />
                <Legend 
                    align="right" 
                    verticalAlign="top" 
                    iconType="circle"
                    iconSize="8px" 
                    margin={{top: 0, left: 100, right: 0, bottom: 0}}
                    wrapperStyle={{top:"-2rem", fontSize:".9rem"}}
                    chartWidth={50}
                    formatter={renderColorfulLegendText}
                    
                    
                    />
                <Bar 
                    yAxisId="kg"
                    name="Poids (kg)" 
                    dataKey="pv" 
                    fill="#282D30" 
                    minPointSize={3} 
                    unit="kg" 
                    maxBarSize={8}
                    isAnimationActive={true}
                />
                <Bar 
                    yAxisId="kcal"
                    name="Calories brûlées (kCal)" 
                    dataKey="uv" 
                    fill="#E60000" 
                    unit="Kcal" 
                    maxBarSize={8}
                    isAnimationActive={true}
                  
                />
            </BarChart>
        //    </ResponsiveContainer> 
    
    );
return(
    <section className='activity-graph'>
        <p className='activity-graph--name'>Activité quotidienne</p>
        {renderLineChart}
    </section>
    
)
}
export default SimpleBarChart;
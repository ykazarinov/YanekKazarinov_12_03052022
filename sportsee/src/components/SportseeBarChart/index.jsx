import PropTypes from 'prop-types'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

/**
* Represents a daily activity chart.
* @description Displays daily activity in the form of a bar graph that shows information
* about weight and calories burned. 
* The x-axis corresponds to the days of the current month. 
* On hover, a tooltip appears.
* @param {Object[]} Data - Information about weight and calories burned.
* @external Recharts library.
* @see {@link https://recharts.org/en-US/api/BarChart}
* @returns A daily activity chart React Element.
* @author Kazarinov Yanek aka Artfish <artfish.pro>
*/

function SportseeBarChart({Data}){

    /**
     * Element of Legend for chart
     * @kind function
     * @param {object} value - Information for the legend.
     * @memberof renderLineChart
     */
 
    const renderColorfulLegendText = (value) => {
        return <span style={{ color:"#74798C", marginLeft:".7rem", marginRight:"2rem" }}>{value}</span>;
    }

    /**
     * React element for chart
     * @kind constant
     */

    const renderLineChart = (
         <ResponsiveContainer width='100%' height={320}>
            <BarChart 
                width={730} 
                height={320} 
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
                    dataKey={'kilogram'}  
                    domain={['dataMin-1', 'dataMax+1']} 
                    tickLine={false}
                    tickSize={15}
                    tick={{stroke: '#9B9EAC', strokeWidth: 0}}
                    
                />
                <YAxis 
                    yAxisId="kcal"
                    orientation='right' 
                    dataKey={'kilogram'}  
                    domain={[100, 500]} 
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
                    dataKey="kilogram" 
                    fill="#282D30" 
                    minPointSize={3} 
                    unit="kg" 
                    maxBarSize={8}
                    isAnimationActive={true}
                />
                <Bar 
                    yAxisId="kcal"
                    name="Calories brûlées (kCal)" 
                    dataKey="calories" 
                    fill="#E60000" 
                    unit="Kcal" 
                    maxBarSize={8}
                    isAnimationActive={true}
                  
                />
            </BarChart>
        </ResponsiveContainer>    
    
    );
return(
    <section className='activity-graph'>
        <p className='activity-graph--name'>Activité quotidienne</p> 
        {renderLineChart}
    </section> 
    )
}

SportseeBarChart.propTypes = {
    Data: PropTypes.array
}
export default SportseeBarChart;
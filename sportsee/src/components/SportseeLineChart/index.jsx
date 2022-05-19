import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
* Average session duration chart.
* @description Displays a chart of the average session duration. 
* The abscissa shows the average duration of sessions. 
* On hover, a tooltip appears.
* @param {Object[]} Data - Information about the average duration of sessions.
* @external Recharts library.
* @see {@link https://recharts.org/en-US/api/LineChart}
* @returns Average session duration chart React Element.
* @author Kazarinov Yanek aka Artfish <artfish.pro>
*/
function SportseeLineChart({Data}){

    /**
   * React element for chart
   * @kind constant
   */
  const renderLineChart = (
    <ResponsiveContainer width='100%' height={250}>
      <AreaChart
        width={230}
        height={230}
        data={Data}
        margin={{ top: 10, right: 10, bottom: -30, left: 15 }}
      >

      <XAxis 
        dataKey="name" 
        tickLine={false}
        tickSize={-30}
        axisLine={false}
        tick={{fill: 'rgba(255, 255, 255, .5)'}}
      />

      <Tooltip 
        filterNull={false}
        separator=""
        itemStyle={{
            color:"#000000",
            backgroundColor: "#ffffff", 
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
            backgroundColor: "#ffffff", 
            border: 0
        }}
        labelStyle={{
            display: "none"
        }}
      />

      <Area 
        type="natural" 
        dataKey="sessionLength" 
        stroke="#ffffff" 
        activeDot={{ stroke: 'rgba(255, 255, 255, .5)', strokeWidth: 10, r: 3 }}
        dot={false}
        unit="min"
        strokeWidth={2}
        connectNulls={true}
        fillOpacity={1} 
        fill="rgba(255, 255, 255, .1)"
      />
    
    </AreaChart>
    </ResponsiveContainer>

  )
  return(
    <section className='average-graph'>
        <p className='average-graph--name'>Durée moyenne des sessions</p>
        {renderLineChart}
    </section>
    
)
}

SportseeLineChart.propTypes = {
  Data: PropTypes.array
}
export default SportseeLineChart
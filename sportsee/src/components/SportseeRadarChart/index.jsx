import PropTypes from 'prop-types'
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer} from 'recharts';

/**
* Activity Type radar chart.
* @description Displays a radar chart of the Activity Type. 
* @param {Object[]} Data - Information about Activity Type.
* @external Recharts library.
* @see {@link https://recharts.org/en-US/api/RadarChart}
* @returns Activity Type chart React Element.
* @author Kazarinov Yanek aka Artfish <artfish.pro>
*/
function SportseeRadarChart({Data}){
    
    /**
   * React element for chart
   * @kind constant
   */
    const renderRadarChart = (
        <ResponsiveContainer width="100%" height={250}>
            <RadarChart outerRadius={90} width={230} height={230} data={Data}>
            <PolarGrid 
             radialLines={false}
            />
            <PolarAngleAxis 
                dataKey="kindName"
                tick={{fill:"#ffffff", fontSize:10}}
                axisLine={true}
                tickLine={true}
            />
            
            <PolarRadiusAxis 
                tickCount={6}
                domain={[0, 150]}
                axisLine={false}
                tick={false}
            />

            <Radar 
                dataKey="value" 
                stroke="rgba(230, 0, 0, .7)" 
                fill="#E60000"
                fillOpacity={0.6} 
            />
        
            </RadarChart>
        </ResponsiveContainer>
    )
    return(
        <section className='performance-graph'>
            {renderRadarChart}
        </section>
    
    )
}
SportseeRadarChart.propTypes = {
    Data: PropTypes.array
  }
 export default SportseeRadarChart

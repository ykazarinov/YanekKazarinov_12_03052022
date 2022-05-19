import PropTypes from 'prop-types'
import { RadialBarChart , RadialBar, ResponsiveContainer } from 'recharts';

/**
* Average score as a Radial Bar Chart.
* @description Displays a radial bar chart of the Avarage score. 
* @param {Object[]} Data - Information about Avarage score.
* @param {String} PercentString - Average score percentage.
* @external Recharts library.
* @see {@link https://recharts.org/en-US/api/RadialBarChart}
* @returns Average score chart React Element.
* @author Kazarinov Yanek aka Artfish <artfish.pro>
*/
function SportseeRadialBarChart(props){

    return (

        <section className='score-graph'>

            <div className='score_label'>
                <div className='score_label--prc'>
                    {props.PercentString}
                </div>
                <div className='score_label--text'>
                    de votre objectif
                </div>
            </div>
            <p className='score-graph--name'>Score</p>
            <ResponsiveContainer width='100%' height={250}>
                <RadialBarChart 
                    width={250} 
                    height={250} 
                    innerRadius="65%" 
                    outerRadius="90%" 
                    data={props.Data} 
                    startAngle={90} 
                    endAngle={450}
                    barCategoryGap={0}
                >
                    <RadialBar 
                        minAngle={35} 
                        label={false} 
                        clockWise={true} 
                        dataKey='value'
                        background={false}
                        
                    />
    
                </RadialBarChart>

            </ResponsiveContainer>
        </section>
    )
}

SportseeRadialBarChart.propTypes = {
    Data: PropTypes.array,
    PercentString: PropTypes.string
}

export default SportseeRadialBarChart
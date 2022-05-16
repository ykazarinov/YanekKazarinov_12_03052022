import PropTypes from 'prop-types'
import { RadialBarChart , RadialBar, ResponsiveContainer } from 'recharts';

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
                    innerRadius={75} 
                    outerRadius={100} 
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
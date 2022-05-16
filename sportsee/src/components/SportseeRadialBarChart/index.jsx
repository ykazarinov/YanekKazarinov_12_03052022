import { RadialBarChart , RadialBar, ResponsiveContainer } from 'recharts';

function SportseeRadialBarChart({Data}){
     
    let dataValues = Object.values(Data)
    let PercentValue = dataValues.map(x => x.value)
    let PercentString = (PercentValue[1] * 100) + '%'
    
    return (

        <section className='score-graph'>

            <div className='score_label'>
                <span className='score_label--prc'>
                    {PercentString}
                </span>
                <span className='score_label--text'>
                    de votre objectif
                </span>
            </div>
            <p className='score-graph--name'>Score</p>
            <ResponsiveContainer width='100%' height={250}>
                <RadialBarChart 
                    width={250} 
                    height={250} 
                    innerRadius={75} 
                    outerRadius={100} 
                    data={Data} 
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

export default SportseeRadialBarChart
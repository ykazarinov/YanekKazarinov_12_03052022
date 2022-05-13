
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

function SportseePieChart({Data}){
     
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
                
                <PieChart 
                    width={250} 
                    height={250}
                 

                >
                    
                
                    <Pie 
                        data={Data} 
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={85} 
                        outerRadius={100} 
                        fill="#FF0000"
                        startAngle={450} 
                        endAngle={90} 
                    
                    />
                    {/* <Pie data={Data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
                </PieChart>
            </ResponsiveContainer>
        </section>
    )
  
 
  
}

export default SportseePieChart
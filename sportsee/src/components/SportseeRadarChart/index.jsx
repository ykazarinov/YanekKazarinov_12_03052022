import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from 'recharts';

function SportseeRadarChart({Data}){
    const renderRadarChart = (
        <RadarChart outerRadius={90} width={230} height={230} data={Data}>
        <PolarGrid />
        <PolarAngleAxis 
            dataKey="kindName"
            tick={{fill:"#ffffff", fontSize:10}}
            
        />
        <PolarRadiusAxis 
            angle={30} 
            domain={[0, 150]} 

        />
        <Radar 
            name="Mike" 
            dataKey="value" 
            stroke="#8884d8" 
            fill="rgba(#FF0101B2)"
 
            fillOpacity={0.6} 
        />
       

        </RadarChart>
    )
    return(
        
        <section className='performance-graph'>
            {renderRadarChart}
        </section>
    
    )
}
 export default SportseeRadarChart

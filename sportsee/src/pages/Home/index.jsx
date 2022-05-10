import MenuLeft from '../../components/MenuLeft/index'
import {ApiUserName, ApiActivity, ApiAverage} from '../../utils/ApiData/index'
import { useParams } from 'react-router-dom'
import SportseeBarChart from '../../components/SimpleBarChart/index'
import SportseeLineChart from '../../components/SportseeLineChart/index'
import { useEffect, useState } from 'react'
import { ResponsiveContainer } from 'recharts';



function Home() {



    const helloMessage =  'Félicitation ! Vous avez explosé vos objectifs hier 👏'
    let { userId } = useParams({})

    const [userName, setUserName] = useState(null)
    const [session, setSession] = useState(null)
    const [average, setAverage] = useState(null)
   
    useEffect(() => {
        const fetchData = async () => {
            const currentUserName = await ApiUserName(userId)
            setUserName(currentUserName)

            const currentSession = await ApiActivity(userId)
            setSession(currentSession)

            const currentAverage = await ApiAverage(userId)
            setAverage(currentAverage)
        }
      
        fetchData()
      }, [])


      
    return(
        <div className="container-fluid menu-left-container">
            
            <div className='row'>
                <MenuLeft></MenuLeft>
                <div className='col-10 main-content'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>Bonjour <span className='red'>{userName}</span></h1>
                            <p className='hello_message'>{helloMessage}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-9'>
                            
                          <div className='row'>
                            <div className='col-12'>
                              {/* <ResponsiveContainer> */}
                                <SportseeBarChart  Data={session} />
                              {/* </ResponsiveContainer> */}
                              
                            </div>
                            <div className='col-4'>
                              <SportseeLineChart  Data={average} />
                            </div>
                            <div className='col-4'>
                            2
                            </div>
                            <div className='col-4'>
                             3
                            </div>
                          </div>

                        </div>
                        <div className='col-3'>222</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Home;
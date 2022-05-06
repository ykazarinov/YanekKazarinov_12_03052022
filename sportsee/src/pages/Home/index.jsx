import MenuLeft from '../../components/MenuLeft/index'
import {ApiUserName, ApiActivity} from '../../utils/ApiData/index'
import { useParams } from 'react-router-dom'
import SimpleBarChart from '../../components/SimpleBarChart/index'
import { useEffect, useState } from 'react'



function Home() {

    const testData = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]

    const helloMessage =  'Félicitation ! Vous avez explosé vos objectifs hier 👏'
    let { userId } = useParams({})

    const [userName, setUserName] = useState(null)
    const [session, setSession] = useState(null)
   
    useEffect(() => {
        const fetchData = async () => {
            const currentUserName = await ApiUserName(userId)
            setUserName(currentUserName)

            const currentSession = await ApiActivity(userId)
            setSession(currentSession)
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
                            
                            {/* {categ && <SimpleBarChart categ={categ} />} */}
                            <SimpleBarChart  Data={session} />

                        </div>
                        <div className='col-3'>222</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Home;
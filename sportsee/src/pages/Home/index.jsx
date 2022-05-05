import MenuLeft from '../../components/MenuLeft/index'
import {ApiUserName, ApiActivity} from '../../utils/ApiData/index'
import { useParams } from 'react-router-dom'
import SimpleBarChart from '../../components/SimpleBarChart/index'
import { useEffect, useState } from 'react'

// import { useEffect, useState } from "react";

function Home() {

    const helloMessage =  'Félicitation ! Vous avez explosé vos objectifs hier 👏'
    let { userId } = useParams({})

    const [userName, setUserName] = useState(null)
    const [categ, setCateg] = useState(null)
   
    useEffect(() => {
        const fetchData = async () => {
            const DataUserName = await ApiUserName(userId)
            setUserName(DataUserName)
            const DataCateg = await ApiActivity(userId)
            setCateg(DataCateg)
        }
      
        fetchData()
      }, [])

    // let userName = ApiUserName(userId)
    // let categ = ApiActivity(userId)

    // console.log(ApiActivity(userId))

     
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
                        <div className='col-8'>
                            
                            {categ && <SimpleBarChart categ={categ} />}

                        </div>
                        <div className='col-4'>222</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Home;
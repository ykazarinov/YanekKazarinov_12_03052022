import PropTypes from 'prop-types'

import MenuLeft from '../../components/MenuLeft/index'
import {ApiUserName, ApiActivity, ApiAverage, ApiPerformance, ApiScore, ApiVitamines} from '../../utils/ApiData/index'
import { useParams} from 'react-router-dom'
import SportseeBarChart from '../../components/SportseeBarChart/index'
import SportseeLineChart from '../../components/SportseeLineChart/index'
import SportseeRadarChart from '../../components/SportseeRadarChart/index'
import SportseeRadialBarChart from '../../components/SportseeRadialBarChart/index'
import Vitamines from '../../components/Vitamines/index'

/**
 * @file Icons of key digit blocks.
 */
import vit_001 from '../../assets/images/calories.svg'
import vit_002 from '../../assets/images/proteines.svg'
import vit_003 from '../../assets/images/glucides.svg'
import vit_004 from '../../assets/images/lipides.svg'

import { useState, useEffect } from 'react'

/**
* Home page.
* @description Displays the main page with all blocks (Header, Left menu, Charts).
* @returns Home page React Element.
* @author Kazarinov Yanek aka Artfish <artfish.pro>
*/
function Home() {

  /**
   * @constant helloMessage
   * Welcome text
   */
  const helloMessage =  'Félicitation ! Vous avez explosé vos objectifs hier 👏'
  
  /**
   * @kind member
   * User Id, derived from URL
   */
  let { userId } = useParams({})

  /**
  * Additional information for Key digit blocks
  * @readonly
  * @property {string}  image     - Icon path.
  * @property {string}  bgColor   - Background color for key digit block in HEX color format.
  * @property {string} unit       - Unit of key digit.
  * @property {string} text       - Explanatory text for key digit block.
  */
  let styledData = [
    {
      image: vit_001,
      bgColor: '#FF0000',
      unit: 'kCal',
      text: 'Calories'
    },
    {
      image: vit_002,
      bgColor: '#4AB8FF',
      unit: 'g',
      text: 'Proteines'
    },
    {
      image: vit_003,
      bgColor: '#FDCC0C',
      unit: 'g',
      text: 'Glucides'
    },
    {
      image: vit_004,
      bgColor: '#FD5181',
      unit: 'g',
      text: 'Lipides'
    }
  ]

  /**
  * State hooks containing relevant data from the API.
  */
  const [userName, setUserName] = useState(null)
  const [session, setSession] = useState(null)
  const [average, setAverage] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [score, setScore] = useState(null)
  const [score2, setScore2] = useState(null)

  const [calories, setCalories] = useState(null)
  const [protein, setProtein] = useState(null)
  const [carbohydrate, setCarbohydrate] = useState(null)
  const [lipid, setLipid] = useState(null)

  let myVitamins = [calories, protein, carbohydrate, lipid]


  useEffect(() => {
  /**
   * @async
   * @function fetchData
   * @description Executes a series of asynchronous component functions (to receive data)
   * and passes the data to the appropriate state hooks.
   * 
   */
    const fetchData = async () => {
        const currentUserName = await ApiUserName(userId)
        setUserName(currentUserName)

        const currentSession = await ApiActivity(userId)
        setSession(currentSession)

        const currentAverage = await ApiAverage(userId)
        setAverage(currentAverage)

        const currentPerformance = await ApiPerformance(userId)
        setPerformance(currentPerformance)

        const currentScore = await ApiScore(userId)
        setScore(currentScore[0])
        setScore2(currentScore[1])

        const currentVitamines = await ApiVitamines(userId)
        setCalories(currentVitamines.calorieCount)
        setProtein(currentVitamines.proteinCount)
        setCarbohydrate(currentVitamines.carbohydrateCount)
        setLipid(currentVitamines.lipidCount)
    }
 
    fetchData()
  }, [userId])

    return(
      <div className="container-fluid menu-left-container">
            
      <div className='row responsiveRow'>
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
                          <SportseeBarChart  Data={session} />
                      </div>
                      <div className='col-4'>
                        <SportseeLineChart  Data={average} />
                      </div>
                      <div className='col-4'>
                        <SportseeRadarChart Data={performance}/>
                      </div>
                      <div className='col-4'>
                        <SportseeRadialBarChart Data={score} PercentString={score2}/>
                      </div>
                    </div>

                  </div>
                  <div className='col-3'>
                    {myVitamins.map((vit, index) => (
                       <Vitamines 
                       Data={vit} 
                       styledData={styledData[index]}>
                     </Vitamines>
                    ))}
                     
                  </div>
              </div>
          </div>
      </div>
     
  </div>
      )


}

Home.propTypes = {
  currentUserName: PropTypes.string,
  currentSession: PropTypes.object,
  currentAverage: PropTypes.object,
  currentPerformance: PropTypes.object,
  currentScore: PropTypes.object,
  currentVitamines: PropTypes.object

}

export default Home
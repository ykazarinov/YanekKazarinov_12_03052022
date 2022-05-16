import PropTypes from 'prop-types'

import MenuLeft from '../../components/MenuLeft/index'
import {ApiUserName, ApiActivity, ApiAverage, ApiPerformance, ApiScore, ApiVitamines} from '../../utils/ApiData/index'
import { useParams } from 'react-router-dom'
import SportseeBarChart from '../../components/SportseeBarChart/index'
import SportseeLineChart from '../../components/SportseeLineChart/index'
import SportseeRadarChart from '../../components/SportseeRadarChart/index'
import SportseeRadialBarChart from '../../components/SportseeRadialBarChart/index'
import Vitamines from '../../components/Vitamines/index'

import vit_001 from '../../assets/images/calories.svg'
import vit_002 from '../../assets/images/proteines.svg'
import vit_003 from '../../assets/images/glucides.svg'
import vit_004 from '../../assets/images/lipides.svg'

import { Component } from 'react'

//I use a class wrapped in a functional component so that the hook useParams can be used.

function WithParams(Component) {
  return props => <Component {...props} params={useParams({})} />;

}

class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      currentUserName:'',
      currentSession: {},
      currentAverage: {},
      currentPerformance: {},
      currentScore: {},
      currentVitamines: {}
    }
  }

  componentDidMount(){
    const  userId  = this.props.params.id;

    const fetchData = async () => {
        const currentUserName = await ApiUserName(userId)
        this.setState({currentUserName})

        const currentSession = await ApiActivity(userId)
        this.setState({currentSession})

        const currentAverage = await ApiAverage(userId)
        this.setState({currentAverage})

        const currentPerformance = await ApiPerformance(userId)
        this.setState({currentPerformance})

        const currentScore = await ApiScore(userId)
        this.setState({currentScore})

        const currentVitamines = await ApiVitamines(userId)
        this.setState({currentVitamines})

    }

    fetchData()

  }

  render() {
    const helloMessage =  'Félicitation ! Vous avez explosé vos objectifs hier 👏'
    const Data = this.state
    console.log(Data)

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
   
    return(
      <div className="container-fluid menu-left-container">
            
      <div className='row'>
          <MenuLeft></MenuLeft>
          <div className='col-10 main-content'>
              <div className='row'>
                  <div className='col-12'>
                      <h1>Bonjour <span className='red'>{this.state.currentUserName}</span></h1>
                      <p className='hello_message'>{helloMessage}</p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-9'>
                      
                    <div className='row'>
                      <div className='col-12'>
                          <SportseeBarChart  Data={this.state.currentSession} />
                      </div>
                      <div className='col-4'>
                        <SportseeLineChart  Data={this.state.currentAverage} />
                      </div>
                      <div className='col-4'>
                        <SportseeRadarChart Data={this.state.currentPerformance}/>
                      </div>
                      <div className='col-4'>
                        <SportseeRadialBarChart Data={this.state.currentScore}/>
                      </div>
                    </div>

                  </div>
                  <div className='col-3'>
                      <Vitamines 
                        Data={this.state.currentVitamines.calorieCount} 
                        styledData={styledData[0]}>
                      </Vitamines>

                      <Vitamines 
                        Data={this.state.currentVitamines.proteinCount} 
                        styledData={styledData[1]}>
                      </Vitamines>

                      <Vitamines 
                        Data={this.state.currentVitamines.carbohydrateCount} 
                        styledData={styledData[2]}>
                      </Vitamines>

                      <Vitamines 
                        Data={this.state.currentVitamines.lipidCount} 
                        styledData={styledData[3]}>
                      </Vitamines>
                  </div>
              </div>
          </div>
      </div>
     
  </div>
      )

}
}

Home.propTypes = {
  currentUserName: PropTypes.string,
  currentSession: PropTypes.object,
  currentAverage: PropTypes.object,
  currentPerformance: PropTypes.object,
  currentScore: PropTypes.object,
  currentVitamines: PropTypes.object

}

// WithParams.propTypes = {
//   Component: PropTypes.elementType
// }

export default  WithParams(Home);
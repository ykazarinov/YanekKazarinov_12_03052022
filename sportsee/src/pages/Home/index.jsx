import MenuLeft from '../../components/MenuLeft/index'
import {ApiUserName, ApiActivity, ApiAverage, ApiPerformance, ApiScore} from '../../utils/ApiData/index'
import { useParams } from 'react-router-dom'
import SportseeBarChart from '../../components/SimpleBarChart/index'
import SportseeLineChart from '../../components/SportseeLineChart/index'
import SportseeRadarChart from '../../components/SportseeRadarChart/index'
import SportseePieChart from '../../components/SportseePieChart/index'

import { Component } from 'react'
import { ResponsiveContainer } from 'recharts';

//I use a class wrapped in a functional component so that the hook useParams can be used.

function withParams(Component) {
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
      currentScore: {}
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
        
    }

    fetchData()

  }

  render() {
    const helloMessage =  'Félicitation ! Vous avez explosé vos objectifs hier 👏'
    const Data = this.state
    console.log(Data)
   
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
                        {/* <ResponsiveContainer width={"100%"} height={400}> */}
                          <SportseeBarChart  Data={this.state.currentSession} />
                        {/* </ResponsiveContainer> */}
                        
                      </div>
                      <div className='col-4'>
                        <SportseeLineChart  Data={this.state.currentAverage} />
                      </div>
                      <div className='col-4'>
                        <SportseeRadarChart Data={this.state.currentPerformance}/>
                      </div>
                      <div className='col-4'>
                        <SportseePieChart Data={this.state.currentScore}/>
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
}

export default  withParams(Home);
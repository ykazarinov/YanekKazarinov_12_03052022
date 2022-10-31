import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";
import {ApiUserName} from '../../utils/ApiData/index'
import { useState, useEffect } from 'react'
import usr1 from '../../assets/images/user1.png'
import usr2 from '../../assets/images/user2.png'

export default function List(){

    const [userName12, setUserName12] = useState(null)
    const [userName18, setUserName18] = useState(null)

    useEffect(() => {
        /**
         * @async
         * @function fetchData
         * @description Executes a series of asynchronous component functions (to receive data)
         * and passes the data to the appropriate state hooks.
         * 
         */
          const fetchData = async () => {
              const myUserName12 = await ApiUserName(12)
              setUserName12(myUserName12)

              const myUserName18 = await ApiUserName(18)
              setUserName18(myUserName18)
              
          }
       
          fetchData()
        }, [])
    return (<>
    <div className="container usr_cont">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
                <div className="usr_img">
                    <Link to='/12'>
                        <img src={usr1} alt = {userName12} />
                    </Link>
                </div>
                <div className="usr_title">
                    {userName12}
                </div>
            </div>
            <div className="col-3">
            <div className="usr_img">
                    <Link to='/18'>
                        <img src={usr2} alt = {userName18} />
                    </Link>
                </div>
                <div className="usr_title">
                    {userName18}
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
    </>)
}
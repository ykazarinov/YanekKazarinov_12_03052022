/**
 * @async
 * @description Gets API data about the username.
 * @param {string} userId - User identification number.
 * @returns string of user name.
 * @author Kazarinov Yanek aka Artfish <artfish.pro>
 */
async function ApiUserName(userId){
    // const response = await fetch(`http://localhost:3000/user/${userId}`);
    // const response = await fetch(`${process.env.SERVER_URL}/user/${userId}`);
    const response = await fetch (`https://sportsee-server.herokuapp.com/user/${userId}`)
    
    const data = await response.json();
    let firstName = data.data.userInfos.firstName
    return firstName
}

/**
 * @async
 * @description Gets API data about the daily activity.
 * @param {string} userId - User identification number.
 * @returns array of objects with calories and kilogrammes.
 * @author Kazarinov Yanek aka Artfish <artfish.pro>
 */
async function ApiActivity(userId){
    const response =  await fetch(`https://sportsee-server.herokuapp.com/user/${userId}/activity`)
    const data = await response.json();
    /**
     * @function
     * Add new property "name" (with index) to data object
     */
    data.data.sessions.map((session, index) => (
        session.name = index+1
    ))

    return data.data.sessions
}

/**
 * @async
 * @description Gets API data about the average session duration.
 * @param {string} userId - User identification number.
 * @returns array of objects with days and durations.
 * @author Kazarinov Yanek aka Artfish <artfish.pro>
 */
async function ApiAverage(userId){
    const response = await fetch(`https://sportsee-server.herokuapp.com/user/${userId}/average-sessions`)
    const data = await response.json();
    /**
     * @constant days - Array of the first letters of the week days (on French)
     */
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    /**
     * @function
     * Add new property "name" (with days) to data object
     */
    data.data.sessions.map((session, index) => (
        session.name = days[index]
    ))
    return data.data.sessions
}

/**
 * @async
 * @description Gets API data about the type of activity.
 * @param {string} userId - User identification number.
 * @returns array of objects with types and indicators of activities.
 * @author Kazarinov Yanek aka Artfish <artfish.pro>
 */
async function ApiPerformance(userId){
    const response = await fetch(`https://sportsee-server.herokuapp.com/user/${userId}/performance`)
    const data = await response.json();

    let kindNames = Object.values(data.data.kind)
    
    /**
     * @function
     * Add new property "kindName" (with types) to data object
     */
    kindNames.map((kindName, index) => (
        data.data.data[index].kindName = kindName
    ))

    return data.data.data
}

/**
 * @async
 * @description Gets API data about the score.
 * @param {string} userId - User identification number.
 * @returns array of objects with score and auxiliary element (for scale) + Percent String of score.
 * @author Kazarinov Yanek aka Artfish <artfish.pro>
 */
async function ApiScore(userId){
    const response = await fetch(`https://sportsee-server.herokuapp.com/user/${userId}`)
    const data = await response.json();

    /**
     * @constant score - An array of objects is formed.
     * @description parameter "value" of the first object = 1 (i.e. 100%) and has a transparent fill
     * The second object is the immediate value. 
     * Since for different users (id 12 and 18) the name of this parameter is different 
     * (score and todayScore), a conditional operator is used here.
     */
    const score = await [
        {
            "value": 1,
            "fill": "transparent"
        },
          {
            "value": data.data.score ? data.data.score : data.data.todayScore,
            "fill": "#FF0000"
        }
    ]

        let dataValues = Object.values(score)
        let PercentValue = dataValues.map(x => x.value)
        let PercentString = (PercentValue[1] * 100) + '%'

    return [score, PercentString]
}

/**
 * @async
 * @description Gets API data about the Key digit.
 * @param {string} userId - User identification number.
 * @returns array of objects with Key digit.
 * @author Kazarinov Yanek aka Artfish <artfish.pro>
 */
async function ApiVitamines(userId){
    const response = await fetch(`https://sportsee-server.herokuapp.com/user/${userId}`);
    const data = await response.json();
    return data.data.keyData
}


export {ApiUserName, ApiActivity, ApiAverage, ApiPerformance, ApiScore, ApiVitamines};

import PropTypes from 'prop-types'

async function ApiUserName(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const data = await response.json();
    let firstName = data.data.userInfos.firstName
    return firstName
}

async function ApiActivity(userId){
    const response =  await fetch(`http://localhost:3000/user/${userId}/activity`)
    const data = await response.json();
    
    // Rename properties "categories" and "kilogram" in "uv" and "pv"
    var jsonToString = JSON.stringify(data.data.sessions);
    jsonToString = jsonToString.replace(/calories/g, 'uv');
    jsonToString = jsonToString.replace(/kilogram/g, 'pv');
    
    let newSessions = JSON.parse(jsonToString);

    // Add new property "name" to object
    newSessions.map((session, index) => (
        session.name = index+1
    ))
   
    return newSessions
}

async function ApiAverage(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const data = await response.json();

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    
    // Rename properties "categories" and "kilogram" in "uv" and "pv"
    var jsonToString = JSON.stringify(data.data.sessions);
    jsonToString = jsonToString.replace(/sessionLength/g, 'pv');
    
    let newSessions = JSON.parse(jsonToString);

    // Add new property "name" to object
    newSessions.map((session, index) => (
        session.name = days[index]
       
    ))
    return newSessions
}

async function ApiPerformance(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const data = await response.json();

    let kindNames = Object.values(data.data.kind)
    
    kindNames.map((kindName, index) => (
        data.data.data[index].kindName = kindName
    ))

    let performanece = data.data.data

    return performanece
}

async function ApiScore(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const data = await response.json();
    const score = [
        {
            "name": "25-29",
            "value": 0.5,
            "fill": "transparent"
        },
          {
            "name": "Group A",
            "value": data.data.score ? data.data.score : data.data.todayScore,
            "fill": "#FF0000"
        }
    ]

    return score
}

async function ApiVitamines(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const data = await response.json();
    return data.data.keyData
}

ApiUserName.propTypes = {
    userId: PropTypes.string.isRequired
}
ApiActivity.propTypes = {
    userId: PropTypes.string.isRequired
}
ApiAverage.propTypes = {
    userId: PropTypes.string.isRequired
}
ApiPerformance.propTypes = {
    userId: PropTypes.string.isRequired
}
ApiScore.propTypes = {
    userId: PropTypes.string.isRequired
}
ApiVitamines.propTypes = {
    userId: PropTypes.string.isRequired
}


export {ApiUserName, ApiActivity, ApiAverage, ApiPerformance, ApiScore, ApiVitamines};

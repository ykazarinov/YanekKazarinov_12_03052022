
async function ApiUserName(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const data = await response.json();
    return data.data.userInfos.firstName
}

async function ApiActivity(userId){
    const response =  await fetch(`http://localhost:3000/user/${userId}/activity`)
    const data = await response.json();
    
    // Rename properties "categories" and "kilogram" in "uv" and "pv"
    var str = JSON.stringify(data.data.sessions);
    str = str.replace(/calories/g, 'uv');
    str = str.replace(/kilogram/g, 'pv');
    
    let newSessions = JSON.parse(str);

    // Add new property "name" to object
    newSessions.map((session, index) => {
        session.name = index+1
        // session.uv = session.uv / 2.5
    })
   
    return newSessions
}

async function ApiAverage(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const data = await response.json();

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    
    // Rename properties "categories" and "kilogram" in "uv" and "pv"
    var str = JSON.stringify(data.data.sessions);
    // str = str.replace(/day/g, 'name');
    str = str.replace(/sessionLength/g, 'pv');

    
    let newSessions = JSON.parse(str);

    // Add new property "name" to object
    newSessions.map((session, index) => {
        session.name = days[index]
       
    })
    console.log(newSessions)
    return newSessions
}

async function ApiPerformance(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const data = await response.json();
    return data
}

export {ApiUserName, ApiActivity, ApiAverage, ApiPerformance};

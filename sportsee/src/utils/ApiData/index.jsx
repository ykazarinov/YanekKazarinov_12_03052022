import { useEffect, useState } from "react";

async function ApiUserName(userId){
   
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();

        return data.data.userInfos.firstName
 
}

async function ApiActivity(userId){
   
    const response =  await fetch(`http://localhost:3000/user/${userId}/activity`)
    const data = await response.json();

    return data.data


   
}

export {ApiUserName, ApiActivity};

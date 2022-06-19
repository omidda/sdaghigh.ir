import axios from "axios";
import { holidays } from '../data/holidays'

let liara_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MjNmMDExODQ3YTdhZDhjY2Q4NWZmMTgiLCJpYXQiOjE2NDg5NzQ1MDZ9.FOvWF3iMw2B1Ck-aDB7eeOW6zgt-5YNepUFTh5gy5tA";
const liara_api_base_url = "https://api.iran.liara.ir";

export const turnOnOffApp = (appName,operation) => {
        return new Promise((resolve,reject) => {
            console.log("Scheduler run " +  
            " " + operation + " for " + appName);

            const instance = axios.create({
                baseURL: liara_api_base_url,
                timeout: 10000,
                headers: {'Authorization': `Bearer ${liara_token}` }
            });

            instance.post(`/v1/projects/${appName}/actions/scale`,{
                scale : operation
            })
            .then((res)=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            })
    })
}

export const checkIfTodayIsHoliday = () => {
    var today = new Date();
    let currentDay = today.toISOString().split("T")[0];

    if(holidays && 
        holidays[0] && 
        holidays.indexOf(currentDay) > -1)
        return true;
    else
        return false;

}
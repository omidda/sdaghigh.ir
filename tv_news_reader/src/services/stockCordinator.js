import axios from "axios";

let liara_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MjNmMDExODQ3YTdhZDhjY2Q4NWZmMTgiLCJpYXQiOjE2NDg5NzQ1MDZ9.FOvWF3iMw2B1Ck-aDB7eeOW6zgt-5YNepUFTh5gy5tA";
const liara_api_base_url = "https://api.iran.liara.ir";
 ;

export const turnOnOffApp = (appName,operation) => {

    console.log("Scheduler run " + new Date().toLocaleString() + " " + opration + " for " + appName);

    const instance = axios.create({
        baseURL: liara_api_base_url,
        timeout: 10000,
        headers: {'Authorization': `Bearer ${liara_token}` }
      });

    instance.post(`/v1/projects/${appName}/actions/scale`,{
        scale : operation
    },instance)
    .then((res)=>{
        console.log(res);
    })


}
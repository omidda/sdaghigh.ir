import { checkIfTodayIsHoliday, turnOnOffApp } from './services/stockCordinator.js';
import { queryAndMergeResult } from './services/newsGathering.js';
import app from "./app.js";

import cron from 'node-cron';


console.log("NEWS AND STOCK Cordinator of TRADERVIEW . IR");

turnOnOffApp("tvstockhistory",1);

queryAndMergeResult();




cron.schedule('*/2 * * * *', () => {
    queryAndMergeResult()
  });

cron.schedule("0 22 * * 0-4,6",()=>{
  turnOnOffApp("tvstockhistory",1);
});

cron.schedule("0 7 * * *",()=>{
  turnOnOffApp("tvstockhistory",0);
});

cron.schedule("0 8 * * 0-3,6",()=>{
  if(checkIfTodayIsHoliday())
    turnOnOffApp("tvstockgather",1);
});


cron.schedule("0 17 * * *",()=>{
  turnOnOffApp("tvstockgather",0);
});

// setInterval(()=> queryAndMergeResult() , 120000);


app.listen( 8080 , () => {
    console.log("Traderview rest services runned at http://localhost:3000");
 })



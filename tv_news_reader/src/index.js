import { turnOnOffApp } from './services/stockCordinator.js';
import { queryAndMergeResult } from './services/newsGathering.js';
import app from "./app.js";

import cron from 'node-cron';


console.log("NEWS AND STOCK Cordinator of TRADERVIEW . IR");



queryAndMergeResult();


cron.schedule('*/2 * * * *', () => {
    queryAndMergeResult()
  });

// cron.schedule("20 15 * * 0-3,6",()=>{
//     turnOnOffApp("tvstockgather",1);
// });

// cron.schedule("35 15 * * 0-3,6",()=>{
//   turnOnOffApp("tvstockgather",0);
// });

cron.schedule("55 15 * * 0-4,6",()=>{
  turnOnOffApp("tvstockhistory",1);
});

cron.schedule("35 15 * * 0-4,6",()=>{
  turnOnOffApp("tvstockhistory",0);
});

// setInterval(()=> queryAndMergeResult() , 120000);


app.listen( 8080 , () => {
    console.log("Traderview rest services runned at http://localhost:3000");
 })




import { queryAndMergeResult } from './services/newsGathering.js';
import app from "./app.js"

console.log("NEWS Service of TRADERVIEW . IR");

queryAndMergeResult();

setInterval(()=> queryAndMergeResult(), 120000);


app.listen( 3000 , () => {
    console.log("Traderview rest services runned at http://localhost:3000");
 })




import { getAllNews } from './services/newsGathering.js';

console.log("NEWS Service of TRADERVIEW . IR")

setInterval(()=> getAllNews(), 30000);





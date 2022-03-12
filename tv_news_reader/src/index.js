
import { getAllNews } from './services/newsGathering.js';

console.log("NEWS Service of TRADERVIEW . IR");

getAllNews();

setInterval(()=> getAllNews(), 60000);




import { read } from 'feed-reader';
import { news_sources } from '../settings.js';
import { NewsDTO } from '../model/NewsDTO.js';

var newss = [];

var getNews = (url) =>  new Promise((resolves,rejets) => {
  // console.log("News gathering started -> " , url);
  
 

    try{
      read(url).then((feed) => {
      
        feed.entries.map(f => {
          const n = new NewsDTO(url,
            f.title,
            f.description,
            f.link,
            new Date(f.published));
            newss.push(n);
        });
    
        return resolves(newss);
      
      }).catch((err) => {
        return resolves(url);
      });
  } catch(error){
    return resolves(url);
  }

}) 

export const getAllNews = () => {

  var promieses = [];
  // newss = [];
  
  news_sources.forEach((url) => {
    promieses.push(getNews(url));
  });

  console.log(" BEFORE PROMISE ALL -- Calling : ", promieses.length);

  Promise.allSettled(
    [
      promieses
    ]).then(
    ()=>{
    console.log('ALL NEWS GATHERED');
    console.log(newss.length);
    }
  ).catch((url)=>{
    console.log('ERROR', url)
  });

  

}
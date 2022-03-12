import { read } from 'feed-reader';
import { news_sources } from '../settings.js';
import { NewsDTO } from '../model/NewsDTO.js';


export const getNews = (url) => { 
  
  return new Promise((resolve,reject) => {
        // console.log("News gathering started -> " , url);
        
          let newss = [];


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
          
              resolve(newss);
            
            }).catch((err) => {
              resolve(newss);
            });
        } catch(error){
          resolve(newss);
        }

}) 

} 





export const getAllNews = () => {

  var promieses = [];
  // newss.splice(0, newss.length);
  
  news_sources.forEach((url) => {
    promieses.push(getNews(url));
  });

  console.log(" BEFORE PROMISE ALL -- Calling : ", promieses.length);

  Promise.allSettled(
    promieses
    ).then(
      (values) => {
        let final = mergeResult(values);
        console.log('ALL NEWS GATHERED ' ,  final.length , ' news! ');
    }
  ).catch((url)=>{
    console.log('ERROR', url)
  });

}

const mergeResult = (result) => { 
  let final = [];
  result.map((r, i) => {
    r.value.map((v) => { 
      final.push(v);
    })
  
  });

  return final;
}
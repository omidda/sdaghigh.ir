import { read } from 'feed-reader';
import { news_sources } from '../settings.js';
import { NewsDTO } from '../model/NewsDTO.js';


export const getNews = (url) => { 
  
  return new Promise((resolve,reject) => {
        
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





export const queryAllNews = () => {

  var promieses = [];
  
  news_sources.forEach((url) => {
    promieses.push(getNews(url));
  });

  return Promise.allSettled(
    promieses
  );
}

export const queryAndMergeResult = () => { 
  queryAllNews().then(
      (values) => {
        let final = mergeResult(values);
        console.log('ALL NEWS GATHERED ' ,  final.length , ' news! ');
    }
  ).catch((url)=>{
    console.log('ERROR', url)
  });
}

export const mergeResult = (result) => { 
  let final = [];
  result.map((r, i) => {
    r.value.map((v) => { 
      final.push(v);
    })
  
  });

  return final;
}



export const queryInNews = (query,data) => {
  let q = "";
  query.map((s) => {
      q = q + s + "|";
  });

  if(query && query[0])
    q.substring(0,q.length - 1);
  
  console.log(q);
  let regex = new RegExp("^" + q + "$");
  console.log(regex.test("add as a "));

  return data.filter(news => 
    
     ( (news.t && regex.test(news.t)) || (news.d && regex.test((news.d))) )
    
     );
  
}
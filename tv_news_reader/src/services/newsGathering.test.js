import { getNews, queryAllNews, mergeResult,queryInNews } from './newsGathering';
import { news_sources } from './../settings';

describe("News Gathering test", ()=>{

    test("Gather a single feed", () => {
        return getNews(news_sources[10])
            .then((news) => {
                expect(news.length).toBeGreaterThan(10);
                expect(news[0].d).not.toBeUndefined();

            });
    });

    jest.setTimeout(120000);

    test("Gather all news sources", () => {
        
        return queryAllNews().then(
            (values) => {
                let final = mergeResult(values);
                 expect(final.length).toBeGreaterThan(500);
                expect(final[0].d).not.toBeUndefined();
            }
        );
     })

     test("News Query TEST",()=>{
         let fakeData = [{
             t: "بازار بورس در سال جدید به کجا می روند",
             d: "در صورت مشاهده هر یک از موارد بازار می  توان یه بورس مراجعه کرد"
         }];
        
         let result = queryInNews(["سالاذ", "بورس"],
             fakeData);
        
         expect(result.length).toBeGreaterThan(0);
     })
});
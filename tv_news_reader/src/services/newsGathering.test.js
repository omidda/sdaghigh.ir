import { getNews } from './newsGathering';
import { news_sources } from './../settings';

describe("News Gathering test", ()=>{

    it("Test gather func", ()=>{
        let result = getNews(news_sources[10]);

        expect(result.length).equalTo(1);
    });
});
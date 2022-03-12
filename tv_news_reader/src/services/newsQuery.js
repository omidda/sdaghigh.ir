

const queryNews = (query,data) => {
    let q = "";
    query.map((s) => {
        q = q + s + "|";
    });

    let regex = new RegExp("^" + q + "$");
    
    return data.filter(news => news && news.t && regex.test(news.t));
    
 }
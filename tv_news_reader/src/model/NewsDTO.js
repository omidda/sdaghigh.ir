export class NewsDTO {

    constructor(source = "",
     title = "", 
     desc = "",
     link = "",
     date) {
        this.s = source;
        this.t = title;
        this.d = desc;
        this.l = link;
        if( date && date instanceof Date) {
            this.da = date;
            this.shda = date.toLocaleDateString('fa-IR');
            this.t = date.toLocaleTimeString();
        }
    
    }
    
}

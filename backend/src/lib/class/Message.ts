export default class Message {
    title: string;
    message: string;
    email: string

    constructor(title = "", message = "", email = "") {
        this.title = title;
        this.message = message;
        this.email = email;
    }
    
    get getTitle() {
        return this.title;
    }

    get getEmail() { 
        return this.email;
    }

    get getMessage() { 
        return this.message;
    }

}


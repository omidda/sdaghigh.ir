 export default class OperationInfo { 
    status: string;
    message: string;

     constructor() { 
         return this;
     }

    makeError = () => {
        this.status = "error";
        return this;
    }

    makeSuccess = () => {
        this.status = "success";
        return this;
    }
    
    setMessage = (message: string) =>{ 
        this.message = message;
        return this;
    }

}

module.exports = OperationInfo
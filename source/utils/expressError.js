//here  we made our own custom expressError class..that inherit the properties of the inbuilt  express Error handling  class.
class expressError extends Error{
             
    constructor(statusCode,message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = expressError;
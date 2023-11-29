export class LoginRequest {

    emailUser:String;
    message?:String;

    constructor(emailUser:String){
        this.emailUser=emailUser
    }
}

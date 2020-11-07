import { createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator((data,req)  =>{
    const request = req.switchToHttp().getRequest();
     console.log(request); 
     const user = request.user;
    
    return data ? user && user[data] : user;//request.user;

});
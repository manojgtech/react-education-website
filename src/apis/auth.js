import request from "../config/apiconfig.js"

const loginapi=(post)=>{
    
        return request({
          url:    `auth/login`,
          method: 'GET'
        });
      
}

export  {loginapi };
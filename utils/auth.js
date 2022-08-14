import jwt from "jsonwebtoken";



//creo un middleware per verificare che gli utenti prima di fare le chiamate abbiano un token
export const tokenVerify= (headers)=>{

     const token= headers["authorization"]; //ricevo il token nella header  Authorization: Token
    
     if(!token || token=== null) return false;

      const verify= jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET , (error, user)=>{ //verifico il token
          // console.log(error);

          if(error){return false;}
        
          
          return true;

      })

      return verify;

}
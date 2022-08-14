import mongoose from "mongoose";

export const database=()=>{
if(mongoose.connections[0].readyState){
     console.log('Già connesso');
     return;
}

try {
     mongoose.connect(process.env.NEXT_PUBLIC_DB_URL)
.then(()=>{console.log("connesso");
}) 
} catch (error) {
     console.log(error);
}



};
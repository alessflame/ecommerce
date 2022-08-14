import {createSlice} from "@reduxjs/toolkit"


const authSlice= createSlice({
   name:"auth",
   initialState:{
     data:{},
     isError:false,
     isLoad:true,
   },

   reducers:{
    
     login:(state, action)=>{
          state.data=action.payload;
          state.isError=false;
          state.isLoad= true;

     },

     logout:(state, action)=>{
          state.data={};
          state.isError=false;
          state.isLoad= true;

     }

   }


})


export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
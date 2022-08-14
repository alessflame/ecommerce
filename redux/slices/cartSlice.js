import {createSlice} from "@reduxjs/toolkit"


const cartSlice= createSlice({
   name:"cart",
   initialState:{
     products:[],
     value:0,
     isError:false,
     isLoad:true,
   },

   reducers:{
    
     addToCart:(state, action)=>{

          state.products.push(action.payload);
          state.value= state.products.length;
          state.isError=false;
          state.isLoad= true;

     },

     dropCart:(state, action)=>{
          state.products=[];
          state.value= 0;
          state.isError=false;
          state.isLoad= true;

     }

   }


})


export const {dropCart, addToCart} = cartSlice.actions;
export default cartSlice.reducer;
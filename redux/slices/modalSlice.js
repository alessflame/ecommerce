import { createSlice } from "@reduxjs/toolkit";

const modalSlice= createSlice({
  
     name:"modal",
     initialState:{
          isOpen:false,
          title:"",
          description:"",
          isError:false,

     },
     reducers:{
          onOpen:(state, action)=>{
           state.isOpen=true;
           state.title=action.payload.title;
           state.description=action.payload.description;
           state.isError=false;
          },

          onClose:(state)=>{
               state.isOpen=false;
               state.title="";
               state.description="";
               state.isError=false;
          },

          onError:(state)=>{
               state.isOpen=false;
               state.title="";
               state.description="";
               state.isError=true;

          }

     }


});



export const {onClose, onError, onOpen} = modalSlice.actions;
export default modalSlice.reducer;
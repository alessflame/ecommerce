import {createSlice} from "@reduxjs/toolkit"

const filterSlice= createSlice({

     name:"filter",
     initialState:{
          value:"",
          isLoad:false,
          isError:false,
     },

     reducers:{
     
          addFilter:(state,action)=>{
          state.value=action.payload;
          state.isLoad=true;
          state.isError=false;
     }
}

})

export const {addFilter} = filterSlice.actions;
export default filterSlice.reducer;
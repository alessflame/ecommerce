import cartReducer from "./slices/cartSlice";
import filterSlice from  "./slices/filterSlice"
import modalSlice from "./slices/modalSlice";
import authSlice from "./slices/authSlice";
import {configureStore} from "@reduxjs/toolkit"

export const store= configureStore({

     reducer:{
          auth:authSlice,
          modal:modalSlice,
          cart:cartReducer,
          filter:filterSlice
     }
})
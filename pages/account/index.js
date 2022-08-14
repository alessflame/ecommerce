import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import {login} from "../../redux/slices/authSlice";

import jwt from "jwt-decode"
import InfoUser from '../../components/InfoUser/InfoUser';
import OrdersUser from '../../components/OrdersUser/OrdersUser';

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [token,setToken]= useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch=useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const item = localStorage.getItem("attitude_token");
    if (item) {
      setToken(item);
      const decoded_token= jwt(item);
      console.log(decoded_token);
       dispatch(login(decoded_token));

      
    }},[dispatch])

  return (
    <div>

   <InfoUser/>

   <OrdersUser/>

    </div>
  )
}

export default index
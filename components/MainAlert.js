import React from 'react'
import {
     Alert,
     AlertIcon,
     AlertTitle,
     AlertDescription,
   } from '@chakra-ui/react'



function MainAlert() {
  return (
    <div>  
     <Alert status='warning'>
    <AlertIcon />
    Attenzione! Questo è uno store di prova, non è possibile effettuare nessun ordine.
  </Alert></div>
  )
}

export default MainAlert
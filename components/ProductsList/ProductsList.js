import { Box } from '@chakra-ui/react'
import React from 'react'
import Product from '../Product/Product'
import {Heading} from "@chakra-ui/react"

function ProductsList({products, title}) {
  return (

    <Box>
    {title ? <Heading as="h1">{title}</Heading>: ""}
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      
     

     {products.map(product => <Product key={product._id} {...product}/>)}
    

    </Box>
    </Box>
  )
}




export default ProductsList
import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import ProductsList from '../../components/ProductsList/ProductsList'
import SearchBar from '../../components/SearchBar/SearchBar';
import {productModel} from "../../models/productModel"
import {database} from "../../utils/database"


function index({products}) {

 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {filter} = useSelector(state=>state);

   const filterProducts=()=>{
    if(filter.value===""){return products;}
    
    const filterProducts= products.filter((product)=>{
      return product.name.toLowerCase().includes(filter.value.toLowerCase());
    })

    return filterProducts;
  }

  return (
    <Box display="flex" flexWrap="wrap" w="100%">
     <Heading as="h1">Shop</Heading>
     <SearchBar/>
     
     <ProductsList products={filterProducts()}/>

    </Box>
  )
}

export const getServerSideProps = async()=>{

  //  const res= await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/products`);
  //  const products=await res.json();

  database();

  let products = await productModel.find();
  products= JSON.parse(JSON.stringify(products));


  return{
    props:{products}
  }

}


export default index;
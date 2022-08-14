import React, { useEffect } from 'react'
import Link from "next/link"
import { addToCart } from '../../redux/slices/cartSlice';
import {useSelector,useDispatch} from "react-redux"
import CommentArea from '../CommentArea/CommentArea';
import {onOpen, onClose} from "../../redux/slices/modalSlice";


import {
     Box,
     Container,
     Stack,
     Text,
     Image,
     Flex,
     VStack,
     Button,
     Heading,
     SimpleGrid,
     StackDivider,
     useColorModeValue,
     VisuallyHidden,
     List,
     ListItem,
   } from '@chakra-ui/react';
   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
   import { MdLocalShipping } from 'react-icons/md';
import Comment from '../Comment/Comment';
import CommentsList from '../CommentsList/CommentsList';
   

function SingleProduct({_id,name, price, category, image, features, firstDescription, secondDescription, comments}) {
  const {cart}= useSelector(state=>state);
  const dispatch=useDispatch();


  const clickCart=()=>{
   const control = cart.products.filter((product)=> product.id===_id )

   if(control.length===0){
   dispatch(addToCart({name, category, price,image, id:_id}));
   dispatch(onOpen({description:"Il prodotto è stato aggiunto al carrello!", title:"Ottimo"}))
    }
  }






  return (
     <Container maxW={'7xl'}>
     <SimpleGrid
       columns={{ base: 1, lg: 2 }}
       spacing={{ base: 8, md: 10 }}
       py={{ base: 18, md: 24 }}>
       <Flex>
         <Image
           rounded={'md'}
           alt={'product image'}
           src={image}
           fit={'cover'}
           align={'center'}
           w={'100%'}
           h={{ base: '100%', sm: '400px', lg: '500px' }}
         />
       </Flex>
       <Stack spacing={{ base: 6, md: 10 }}>
         <Box as={'header'}>
           <Heading
             lineHeight={1.1}
             fontWeight={600}
             fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
             {name}
           </Heading>
           <Text
             color={useColorModeValue('gray.900', 'gray.400')}
             fontWeight={300}
             fontSize={'2xl'}>
            {price}€
           </Text>
         </Box>

         <Stack
           spacing={{ base: 4, sm: 6 }}
           direction={'column'}
           divider={
             <StackDivider
               borderColor={useColorModeValue('gray.200', 'gray.600')}
             />
           }>
           <VStack spacing={{ base: 4, sm: 6 }}>
             <Text
               color={useColorModeValue('gray.500', 'gray.400')}
               fontSize={'2xl'}
               fontWeight={'300'}>
               {firstDescription}
             </Text>
             <Text fontSize={'lg'}>
              { secondDescription}
             </Text>
           </VStack>
           <Box>
             <Text
               fontSize={{ base: '16px', lg: '18px' }}
               color={useColorModeValue('yellow.500', 'yellow.300')}
               fontWeight={'500'}
               textTransform={'uppercase'}
               mb={'4'}>
               Caratteristiche
             </Text>

             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

             {features? (<List spacing={2}>
                 {features.length>0 ===true ? features.map((feature, index)=> <ListItem key={index}>{feature}</ListItem>) : ""}
               </List>) : ""
                           }
              
             </SimpleGrid>
           </Box>
           
         </Stack>

         <Button onClick={clickCart}
           rounded={'none'}
           w={'full'}
           mt={8}
           size={'lg'}
           py={'7'}
           bg={useColorModeValue('gray.900', 'gray.50')}
           color={useColorModeValue('white', 'gray.900')}
           textTransform={'uppercase'}
           _hover={{
             transform: 'translateY(2px)',
             boxShadow: 'lg',
           }}>
           Add to cart
         </Button>

         <Stack direction="row" alignItems="center" justifyContent={'center'}>
           <MdLocalShipping />
           <Text>2-3 giorni lavorativi</Text>
         </Stack>
       </Stack>
     </SimpleGrid>

     <CommentsList comments={comments} title="Tutte le recensioni" />
   

   <CommentArea item={{_id:_id}} title="Recensione"/>

   </Container>
  )
}

export default SingleProduct
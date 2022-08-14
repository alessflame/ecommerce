import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function CartProduct({ name, image, price, id }) {
  return (
    <Box
      py="15px"
      border="2px solid black"
      borderRadius="4px"
      display={"flex"}
      justifyContent="flex-start"
      alignItems="center"
    >
      <Image src={image} alt="immagine" width="100px" height="120px" />
      <Heading as="h6" padding="10px">
        {name}
      </Heading>
      <Text>{price}€</Text>
    </Box>
  );
}

export default CartProduct;

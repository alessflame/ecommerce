import { Box, Center, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

function OrdersUser() {
  const [orders, setOrders] = useState(0);

  return (
    <Container
      mt="20px"
      paddingX="20px"
      paddingY="20px"
      height="auto"
      display="flex"
      justifyContent="center"
    >
      <Heading as="h2"> Ordini effettuati : {orders} </Heading>
    </Container>
  );
}

export default OrdersUser;

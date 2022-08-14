import { Heading, Box, Button } from "@chakra-ui/react";
import React from "react";

function CartConfirm({ total, showPay }) {
  return (
    <Box>
      <Heading as="h2">Totale:{total}€</Heading>

      <Button onClick={showPay}>Conferma</Button>
    </Box>
  );
}

export default CartConfirm;

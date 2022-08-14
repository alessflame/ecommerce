import React from "react";
import { Alert, AlertIcon, Box, AlertTitle } from "@chakra-ui/react";

function FormAlert({ message }) {
  return (
    <Alert>
      <AlertIcon />
      <Box>
        <AlertTitle>{message}</AlertTitle>
      </Box>
    </Alert>
  );
}

export default FormAlert;

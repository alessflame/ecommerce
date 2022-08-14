import { Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

function Comment({ name, content }) {
  return (
    <Box display="flex" alignItems="center" marginY={"3"}>
      <Avatar bg="teal.500" name={name} marginX={"2"} />
      <Text>{content}</Text>
    </Box>
  );
}

export default Comment;

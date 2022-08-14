import React from "react";
import Image from "next/image";
import { Box, Container } from "@chakra-ui/react";
import CommentArea from "../CommentArea/CommentArea";
import CommentsList from "../CommentsList/CommentsList";

function BlogArticle({ _id, image, title, description, comments }) {
  return (
    <Box display="flex" flexDirection="column" alignitem="center">
      <Box m="20px 10px" as="h1" fontSize="5xl" fontWeight="bold">
        {title}
      </Box>

      <Box m="25px 0" display="flex" justifyContent="center">
        <Image width="400px" height="280px" src={image} alt="immagine blog" />
      </Box>
      <Container fontSize="large" mt="20px" pb="200px">
        {description}
      </Container>

      <CommentsList comments={comments} />

      <CommentArea title="Commenta" item={{ _id: _id }} />
    </Box>
  );
}

export default BlogArticle;

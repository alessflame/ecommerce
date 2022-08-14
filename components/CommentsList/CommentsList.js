import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import Comment from "../Comment/Comment";

function CommentsList({ title, comments }) {
  return (
    <Container>
      <Heading as="h3">{title}</Heading>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} content={comment.content} />
      ))}
    </Container>
  );
}

export default CommentsList;

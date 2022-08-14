import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onOpen } from "../../redux/slices/modalSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function Comment({ title, item }) {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const postComment = async (content) => {
    let data = { content: content, id_item: item._id, id_user: auth.data._id };
    console.log(item._id);
    console.log(data);

    data = JSON.stringify(data);

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/comments/${item._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("attitude_token"),
      },
      body: data,
    });

    const comment = await res.json();

    dispatch(
      onOpen({ title: "commento inserito", description: comment.message })
    );

    router.reload(window.location.pathname);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: Yup.object({
      content: Yup.string().required("Il campo content è richiesto"),
    }),
    onSubmit: async (values, onSubmitProps) => {
      if (!auth.data.username) {
        return dispatch(
          onOpen({
            title: "Accedi",
            description: "Devi effettuare l'accesso per commentare",
          })
        );
      }

      postComment(values.content);

      onSubmitProps.resetForm();
    },
  });

  return (
    <Container bg="lightgoldenrod" p="5" borderRadius="7px">
      <Heading as="h6">{title}</Heading>

      <form onSubmit={formik.handleSubmit}>
        <Textarea
          name="content"
          onChange={formik.handleChange}
          bg="white"
          height="160px"
          resize="none"
          outline="2px solid black"
        />

        <Button
          borderRadius={"0"}
          type="submit"
          onS
          mt="2"
          bg={useColorModeValue("gray.900", "gray.50")}
          color={useColorModeValue("white", "gray.900")}
        >
          Invia
        </Button>
      </form>
    </Container>
  );
}

export default Comment;

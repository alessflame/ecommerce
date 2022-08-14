import { Container, Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function InfoUser() {
  const { auth } = useSelector((state) => state);
  const router = useRouter();

  console.log(auth);

  useEffect(() => {
    if (!auth.data.username && !auth.data.email) {
      router.push("/account/login");
    }
  }, [auth.data.email, auth.data.username, router]);

  return (
    <Box
      mt="25px"
      display="flex"
      paddingX={"20px"}
      borderRadius="4px"
      paddingY="30px"
      flexDirection="column"
      shadow="dark md"
      bg="#D9D9D9"
    >
      {auth.data.username && auth.data.email ? (
        <Box display="flex" flexDirection="column">
          <Heading as="h3">Username</Heading>

          <b>{auth.data.username}</b>

          <Heading as="h3">Email</Heading>

          <b>{auth.data.email}</b>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default InfoUser;

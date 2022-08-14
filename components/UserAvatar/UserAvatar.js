import React from "react";
import { Container, Button, Avatar, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

function UserAvatar({ name }) {
  console.log(name);
  const dispatch = useDispatch();

  const authDestroy = () => {
    localStorage.removeItem("attitude_token");
    dispatch(logout());
  };

  return (
    <Container display="flex" flexDirection="column" alignItems="center">
      <Avatar bg="teal.500" name={name} />

      {name !== undefined ? (
        <Container>
          <Text>{name}</Text> <Button onClick={authDestroy}>Logout</Button>{" "}
        </Container>
      ) : (
        <Link href="/account/login">
          <Button>Accedi</Button>
        </Link>
      )}
    </Container>
  );
}

export default UserAvatar;

import React from "react";
import style from "./Header.module.css";
import { Center, Box, Button, Heading } from "@chakra-ui/react";
import {
  Container,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import Link from "next/link";
function Header() {
  return (
    <Center className={style.header}>
      <Center position="relative">
        <video className={style.video} src="/collection.mp4" autoPlay muted />

        {/* <Box className={style.box} display="flex" flexDirection="column" position="absolute" alignItems="flex-start" left="0" bottom="20" marginLeft="20%"  >
     <h1 className={style.text}>L&#39;attitudine di chi sa cambiare  </h1>

     <Button>Esplora</Button> */}

        {/* </Box> */}

        <Container maxW={"3xl"} bg="transparent" position="absolute" bottom="0">
          <Stack
            as={Box}
            textAlign={"center"}
            // spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              bg="rgba(238, 227, 209, 0.1)"
              // borderRadius="10px"
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              L&#39;Attitudine di chi
              <br />
              <Text as={"span"} color={"yellow.400"}>
                sa cambiare
              </Text>
            </Heading>
            <Text color={"gray.500"}></Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Link href="/blog">
                <Button
                  position="absolute"
                  colorScheme={"yellow"}
                  bg={"yellow.400"}
                  rounded={"full"}
                  // px={6}
                  _hover={{
                    bg: "yellow.500",
                  }}
                >
                  Scopri di più
                </Button>
              </Link>

              <Box></Box>
            </Stack>
          </Stack>
        </Container>
      </Center>
    </Center>
  );
}

export default Header;

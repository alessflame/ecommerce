import React from "react";
import { Box, Badge, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

function Product({ _id, image, name, price, category }) {
  return (
    <Center py={12} m={3}>
      <Link href={`/shop/${_id}`}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={image}
              alt="product image"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {category}
              </Badge>{" "}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {price}€
              </Text>
              {/* <Text textDecoration={'line-through'} color={'gray.600'}>
            $199
          </Text> */}
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}

export default Product;

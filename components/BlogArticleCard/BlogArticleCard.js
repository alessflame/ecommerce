import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import Link from "next/link";

function BlogArticleCard({ title, image, category, _id }) {
  return (
    <Link href={`blog/${_id}`}>
      <Box
        w="300px"
        m="10px 20px"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={image} alt="immagine blog" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {category}
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default BlogArticleCard;

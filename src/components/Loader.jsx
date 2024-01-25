import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner speed="0.65s" color="purple.500" thickness="1px" size={"xl"} />
      </Box>
    </VStack>
  );
};

export default Loader;

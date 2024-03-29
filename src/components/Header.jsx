import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      justifyContent={"flex-end"}
    >
      <Button variant={"unstyled"} mr={"10"} color={"white"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} mr={"10"} color={"white"}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} mr={"7"} color={"white"}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;

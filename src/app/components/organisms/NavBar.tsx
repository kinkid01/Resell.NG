import { Box, Button, HStack, Image } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image
        src="/images/logo.png"
        alt="ReSellr Logo"
        width="130px"
        height="auto"
      />

      {/* Links */}
      <Box
        as={"ul"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={5}
        fontSize={"md"}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>

        <Button
          size={"sm"}
          rounded={"md"}
          bg={"red.700"}
          _hover={{ bg: "red.200", color: "white" }}
          color={"white"}
          variant="outline"
        >
          Login
        </Button>
      </Box>
    </HStack>
  );
};

export default NavBar;

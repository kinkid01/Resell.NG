import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Text>Logo</Text>

      {/* Links */}
      <Box
        as={"ul"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={2}
        fontSize={"md"}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>

        <Button
          size={"md"}
          rounded={"md"}
          bg={"white"}
          color={"black"}
          variant="outline"
        >
          Login
        </Button>
      </Box>
    </HStack>
  );
};

export default NavBar;

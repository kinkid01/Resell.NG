import { Box, Button, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Link href="/" variant={"plain"}>
        <Image
          src="/images/logo.png"
          alt="ReSellr Logo"
          width="130px"
          height="auto"
        />
      </Link>

      {/* Links */}
      <Box
        as={"ul"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={5}
        fontSize={"md"}
      >
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/login">
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
        </Link>
      </Box>
    </HStack>
  );
};

export default NavBar;

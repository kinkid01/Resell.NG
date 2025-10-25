// import { Box, Button, HStack, Image, Stack } from "@chakra-ui/react";
// import React from "react";
// import ProfileMenu from "../molecules/ProfileMenu";
// import Link from "next/link";

// const NavBar = () => {
//   return (
//     <HStack
//       justifyContent={"space-between"}
//       display={"flex"}
//       flexDirection={{ base: "column", md: "row" }}
//     >
//       {/* Logo */}
//       <Link href="/">
//         <Image
//           src="/images/logo.png"
//           alt="ReSellr Logo"
//           width="130px"
//           height="auto"
//         />
//       </Link>

//       {/* Links */}
//       <Box
//         as={"ul"}
//         display={"flex"}
//         flexDirection={"row"}
//         alignItems={"center"}
//         gap={5}
//         fontSize={"md"}
//       >
//         <Link href="/">Home</Link>
//         <Link href="/">About</Link>
//         <Link href="/">Contact</Link>
//         <Link href="/login">
//           <Button
//             size={"sm"}
//             rounded={"md"}
//             bg={"red.700"}
//             _hover={{ bg: "red.800", color: "white" }}
//             color={"white"}
//             variant="outline"
//           >
//             Login
//           </Button>
//         </Link>

//         <ProfileMenu />
//       </Box>
//     </HStack>
//   );
// };

// export default NavBar;

"use client";

import { motion } from "framer-motion";
import {
  Box,
  Button,
  HStack,
  Image,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import ProfileMenu from "../molecules/ProfileMenu";

const MotionBox = motion(Box);

const NavBar = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      px={6}
      py={4}
      shadow={{ base: "sm", md: "none" }}
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <HStack justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="ReSellr Logo" width="130px" />
        </Link>

        {/* Desktop Menu */}
        <HStack
          as="ul"
          gap={6}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">
            <Button
              size="sm"
              rounded="md"
              bg="red.700"
              color="white"
              _hover={{ bg: "red.800" }}
            >
              Login
            </Button>
          </Link>
          <ProfileMenu />
        </HStack>

        {/* Mobile Hamburger */}

        <HStack display={{ base: "flex", md: "none" }}>
          <IconButton aria-label="Open menu" variant="ghost" onClick={onToggle}>
            {open ? <FaTimes /> : <FaBars />}
          </IconButton>

          <ProfileMenu />
        </HStack>
      </HStack>

      {/* Mobile Dropdown */}

      <MotionBox
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        overflow="hidden"
        transition={{ duration: 0.3 }}
        display={{ base: "block", md: "none" }}
      >
        <VStack align="stretch" py={4} gap={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">
            <Button
              size="sm"
              bg="red.700"
              color="white"
              _hover={{ bg: "red.800" }}
              width="full"
            >
              Login
            </Button>
          </Link>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default NavBar;

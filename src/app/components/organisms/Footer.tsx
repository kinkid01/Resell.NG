"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box bg="gray.200" color="gray.200" py={10} mt={10}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={10}
        >
          {/* ---- Logo Section ---- */}
          <HStack gap={3}>
            <Image
              src="/images/logo.png"
              alt="ReSellr Logo"
              width="130px"
              height="auto"
            />
          </HStack>

          {/* ---- Center Links ---- */}
          <HStack
            gap={{ base: 6, md: 10 }}
            align="flex-start"
            flexWrap="wrap"
            justify="center"
          >
            <VStack align="flex-start" gap={2}>
              <Text fontWeight="semibold">Platform</Text>
              <Link href="#">Browse Tickets</Link>
              <Link href="#">Sell Your Ticket</Link>
              <Link href="#">Escrow System</Link>
            </VStack>

            <VStack align="flex-start" gap={2}>
              <Text fontWeight="semibold">Company</Text>
              <Link href="#">About</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Contact</Link>
            </VStack>

            <VStack align="flex-start" gap={2}>
              <Text fontWeight="semibold">Legal</Text>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">FAQs</Link>
            </VStack>
          </HStack>

          {/* ---- Social Icons ---- */}
          <HStack gap={5}>
            <Link href="#" aria-label="Twitter">
              <Icon
                as={FaXTwitter}
                boxSize={5}
                _hover={{ color: "red.400", transform: "scale(1.1)" }}
                transition="0.2s"
              />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Icon
                as={FaInstagram}
                boxSize={5}
                _hover={{ color: "red.400", transform: "scale(1.1)" }}
                transition="0.2s"
              />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Icon
                as={FaFacebookF}
                boxSize={5}
                _hover={{ color: "red.400", transform: "scale(1.1)" }}
                transition="0.2s"
              />
            </Link>
          </HStack>
        </Flex>

        {/* ---- Divider ---- */}
        <Box borderTopWidth="1px" borderColor="gray.700" mt={8} pt={6}>
          <Text textAlign="center" fontSize="sm" color="gray.500">
            © 2025 ReSellr. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

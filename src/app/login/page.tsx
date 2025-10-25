"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  CheckboxRoot,
  CheckboxControl,
  CheckboxLabel,
  Separator,
  Icon,
  HStack,
  Image,
} from "@chakra-ui/react";

import { FaGoogle } from "react-icons/fa";

const Page = () => {
  return (
    <Container maxW="lg" py={10}>
      {/* ---- Logo ---- */}
      <Center mb={8} display={{ base: "none", md: "block" }}>
        <Flex align="center" gap={3}>
          <Image
            src="/images/logo.png"
            alt="ReSellr Logo"
            width="130px"
            height="auto"
          />
        </Flex>
      </Center>

      {/* ---- Login Card ---- */}
      <Box
        bg="white"
        borderRadius="2xl"
        shadow="md"
        p={8}
        borderWidth="1px"
        borderColor="gray.100"
      >
        <Stack textAlign="center" gap={2} mb={8}>
          <Heading size="2xl" fontWeight={"60px"}>
            Welcome Back
          </Heading>
          <Text color="gray.600">Sign in to continue to your account</Text>
        </Stack>

        <Stack gap={5}>
          {/* ---- Email ---- */}
          <Box>
            <Text fontWeight="medium" mb={2}>
              Email Address
            </Text>
            <Input
              type="email"
              placeholder="example@email.com"
              size="lg"
              borderRadius="xl"
              borderColor="gray.300"
              _focus={{
                borderColor: "red.600",
                boxShadow: "0 0 0 1px #C53030",
              }}
            />
          </Box>

          {/* ---- Password ---- */}
          <Box>
            <Text fontWeight="medium" mb={2}>
              Password
            </Text>
            <Input
              type="password"
              placeholder="••••••••"
              size="lg"
              borderRadius="xl"
              borderColor="gray.300"
              _focus={{
                borderColor: "red.600",
                boxShadow: "0 0 0 1px #C53030",
              }}
            />
          </Box>

          {/* ---- Remember Me & Forgot Password ---- */}
          <Flex justify="space-between" align="center" mt={1}>
            <CheckboxRoot colorPalette="red">
              <CheckboxControl />
              <CheckboxLabel>Remember me</CheckboxLabel>
            </CheckboxRoot>
            <Link href="#" color="red.600" fontWeight="medium" fontSize="sm">
              Forgot password?
            </Link>
          </Flex>

          {/* ---- Login Button ---- */}
          <Button
            bg="red.700"
            color="white"
            _hover={{ bg: "red.800" }}
            size="lg"
            borderRadius="xl"
            mt={2}
          >
            Sign In
          </Button>

          {/* ---- Divider ---- */}
          <Separator my={4} />

          {/* ---- Google Button (fixed icon issue) ---- */}
          <Button
            variant="outline"
            w="full"
            size="lg"
            borderRadius="xl"
            borderColor="gray.300"
            _hover={{ bg: "gray.100" }}
          >
            <HStack justify="center">
              <Icon as={FaGoogle} boxSize={5} />
              <Text>Continue with Google</Text>
            </HStack>
          </Button>
        </Stack>

        {/* ---- Signup Redirect ---- */}
        <Text textAlign="center" mt={6}>
          Don’t have an account?{" "}
          <Link href="/sign-up" color="red.600" fontWeight="medium">
            Sign Up
          </Link>
        </Text>
      </Box>
    </Container>
  );
};

export default Page;

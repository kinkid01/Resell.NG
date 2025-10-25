import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";

const Banner = () => {
  return (
    <HStack
      width={"100%"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* Left */}
      <Stack width={{ base: "", md: "50%" }} gap={5}>
        <Box spaceY={4}>
          <Heading
            fontWeight={{ base: "40px", md: "100px" }}
            fontSize={{ base: "40px", md: "90px" }}
            lineHeight={1.3}
            textAlign={{ base: "center", md: "start" }}
          >
            Buy and Resell <br /> Tickets
          </Heading>

          <Text
            color={"gray.500"}
            fontWeight={"16px"}
            fontSize={{ base: "20px", md: "25px" }}
            textAlign={{ base: "center", md: "start" }}
          >
            Trade airtime, event, train, and airplane <br /> tickets with ease.
          </Text>
        </Box>

        <Box
          display={{ base: "flex", md: "start" }}
          flexDirection={"row"}
          justifyContent={{ base: "center", md: "start" }}
          alignItems={{ base: "center", md: "start" }}
        >
          <Button
            bg="red.700"
            _hover={{ bg: "red.800" }}
            variant="solid"
            width={"150px"}
          >
            Get Started
          </Button>
        </Box>
      </Stack>

      {/* Right */}
      <Box width={{ base: "", md: "50%" }} mt={{ base: 5, md: "" }}>
        <Image src={"/images/ticket-1.jpg"} alt="ticket" rounded={"2xl"} />
      </Box>
    </HStack>
  );
};

export default Banner;

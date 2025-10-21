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
    <HStack width={"100%"}>
      {/* Left */}
      <Stack width={"50%"} gap={5}>
        <Box spaceY={4}>
          <Heading fontWeight={"100px"} fontSize={"90px"} lineHeight={1.3}>
            Buy and Resell <br /> Tickets
          </Heading>

          <Text color={"gray.500"} fontWeight={"16px"} fontSize={"25px"}>
            Trade airtime, event, train, and airplane <br /> tickets with ease.
          </Text>
        </Box>

        <Button
          bg="red.700"
          _hover={{ bg: "red.400" }}
          variant="solid"
          width={"150px"}
        >
          Get Started
        </Button>
      </Stack>

      {/* Right */}
      <Box width={"50%"}>
        <Image src={"/images/ticket-1.jpg"} alt="ticket" rounded={"2xl"} />
      </Box>
    </HStack>
  );
};

export default Banner;

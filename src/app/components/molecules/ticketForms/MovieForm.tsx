"use client";

import { Box, VStack, Input, Textarea, Button, Field } from "@chakra-ui/react";

const MovieForm = () => {
  return (
    <Box>
      <VStack gap={5} align="stretch">
        <Field.Root>
          <Field.Label>Movie Title</Field.Label>
          <Input placeholder="Enter movie title" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Cinema Name</Field.Label>
          <Input placeholder="Enter cinema name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Date & Time</Field.Label>
          <Input type="datetime-local" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Ticket Price (₦)</Field.Label>
          <Input type="number" placeholder="Enter price in NGN" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Description</Field.Label>
          <Textarea placeholder="Enter movie details or seat info" />
        </Field.Root>

        <Button
          bg="red.700"
          color="white"
          size="lg"
          rounded="lg"
          _hover={{ bg: "red.800" }}
        >
          Create Ticket
        </Button>
      </VStack>
    </Box>
  );
};

export default MovieForm;

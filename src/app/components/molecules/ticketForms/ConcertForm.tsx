"use client";

import { Box, VStack, Input, Textarea, Button, Field } from "@chakra-ui/react";

const ConcertForm = () => {
  return (
    <Box>
      <VStack gap={5} align="stretch">
        <Field.Root>
          <Field.Label>Concert Name</Field.Label>
          <Input placeholder="Enter concert name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Performer/Artist</Field.Label>
          <Input placeholder="Enter performer or artist name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Venue</Field.Label>
          <Input placeholder="Enter concert venue" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Date & Time</Field.Label>
          <Input type="datetime-local" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Ticket Price (₦)</Field.Label>
          <Input type="number" placeholder="Enter ticket price" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Description</Field.Label>
          <Textarea placeholder="Enter event details or seating info" />
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

export default ConcertForm;

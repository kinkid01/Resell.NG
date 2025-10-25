"use client";

import {
  Box,
  VStack,
  Input,
  Button,
  Field,
  NativeSelect,
} from "@chakra-ui/react";

const TrainForm = () => {
  return (
    <Box>
      <VStack gap={5} align="stretch">
        <Field.Root>
          <Field.Label>From</Field.Label>
          <Input placeholder="Departure city" />
        </Field.Root>

        <Field.Root>
          <Field.Label>To</Field.Label>
          <Input placeholder="Destination city" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Date & Time</Field.Label>
          <Input type="datetime-local" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Seat Type</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field>
              <option value="">Select seat type</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Ticket Price (₦)</Field.Label>
          <Input type="number" placeholder="Enter ticket price" />
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

export default TrainForm;

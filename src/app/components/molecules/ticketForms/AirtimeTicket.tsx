"use client";

import {
  Box,
  VStack,
  Input,
  Button,
  Field,
  NativeSelect,
} from "@chakra-ui/react";

const AirtimeForm = () => {
  return (
    <Box>
      <VStack gap={5} align="stretch">
        <Field.Root>
          <Field.Label>Network Provider</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field>
              <option value="">MTN</option>
              <option value="economy">Airtel</option>
              <option value="business">Glow</option>
              <option value="first">9Mobile</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Phone Number</Field.Label>
          <Input type="tel" placeholder="Enter phone number" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Amount (₦)</Field.Label>
          <Input type="number" placeholder="Enter amount" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Description</Field.Label>
          <Input placeholder="Optional note or remark" />
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

export default AirtimeForm;

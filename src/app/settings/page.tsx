"use client";

import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Button,
  Card,
  Stack,
  Separator,
  Switch,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Box maxW="4xl" mx="auto" mt={10} p={8}>
      <VStack gap={8} align="stretch">
        <Heading size="lg" color="red.700" textAlign="center">
          Account Settings
        </Heading>

        {/* Profile Settings */}
        <Card.Root rounded="xl" shadow="sm" bg="white">
          <Card.Header borderBottomWidth="1px">
            <Heading size="md" color="gray.700">
              Profile Information
            </Heading>
          </Card.Header>
          <Card.Body>
            <Stack gap={4}>
              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Display Name
                </Text>
                <Input placeholder="Enter your display name" />
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Email
                </Text>
                <Input type="email" placeholder="you@example.com" />
              </Box>
            </Stack>
          </Card.Body>
        </Card.Root>

        {/* Security Settings */}
        <Card.Root rounded="xl" shadow="sm" bg="white">
          <Card.Header borderBottomWidth="1px">
            <Heading size="md" color="gray.700">
              Security
            </Heading>
          </Card.Header>
          <Card.Body>
            <Stack gap={4}>
              <Box>
                <Text fontWeight="semibold" mb={2}>
                  New Password
                </Text>
                <Input type="password" placeholder="Enter new password" />
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Confirm Password
                </Text>
                <Input type="password" placeholder="Confirm new password" />
              </Box>

              {/* Chakra UI v3 Switch syntax */}
              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Two-Factor Authentication
                </Text>
                <HStack justify="space-between">
                  <Text color="gray.600">
                    Add an extra layer of security to your account
                  </Text>
                  <Switch.Root colorPalette="red" defaultChecked>
                    <Switch.Control>
                      <Switch.Thumb />
                    </Switch.Control>
                  </Switch.Root>
                </HStack>
              </Box>
            </Stack>
          </Card.Body>
        </Card.Root>

        {/* Notification Settings */}
        <Card.Root rounded="xl" shadow="sm" bg="white">
          <Card.Header borderBottomWidth="1px">
            <Heading size="md" color="gray.700">
              Notifications
            </Heading>
          </Card.Header>
          <Card.Body>
            <Stack gap={4}>
              <HStack justify="space-between">
                <Text fontWeight="semibold">Email Notifications</Text>
                <Switch.Root colorPalette="red" defaultChecked>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Root>
              </HStack>

              <HStack justify="space-between">
                <Text fontWeight="semibold">Transaction Alerts</Text>
                <Switch.Root colorPalette="red" defaultChecked>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Root>
              </HStack>

              <HStack justify="space-between">
                <Text fontWeight="semibold">Marketing Updates</Text>
                <Switch.Root colorPalette="red">
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Root>
              </HStack>
            </Stack>
          </Card.Body>
        </Card.Root>

        {/* Payment Settings */}
        <Card.Root rounded="xl" shadow="sm" bg="white">
          <Card.Header borderBottomWidth="1px">
            <Heading size="md" color="gray.700">
              Payment & Withdrawals
            </Heading>
          </Card.Header>
          <Card.Body>
            <Stack gap={4}>
              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Bank Account
                </Text>
                <Input placeholder="Enter your account number" />
              </Box>
              <Box>
                <Text fontWeight="semibold" mb={2}>
                  Bank Name
                </Text>
                <Input placeholder="Enter your bank name" />
              </Box>
            </Stack>
          </Card.Body>
        </Card.Root>

        {/* Danger Zone */}
        <Card.Root rounded="xl" shadow="sm" bg="white">
          <Card.Header borderBottomWidth="1px">
            <Heading size="md" color="red.600">
              Danger Zone
            </Heading>
          </Card.Header>
          <Card.Body>
            <Text color="gray.600" mb={3}>
              Once you delete your account, all your data will be permanently
              removed.
            </Text>
            <Button colorPalette="red" variant="outline">
              Delete Account
            </Button>
          </Card.Body>
        </Card.Root>

        <Separator />

        <HStack justify="center">
          <Button
            size="lg"
            bg="red.700"
            color="white"
            _hover={{ bg: "red.600" }}
          >
            Save All Changes
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Page;

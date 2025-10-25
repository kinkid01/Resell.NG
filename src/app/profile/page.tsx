"use client";

import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Heading,
  Card,
  Separator,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react/avatar";
import { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Michael Martins",
    email: "michael@example.com",
    phone: "+234 813 000 0000",
    bankName: "Access Bank",
    accountNumber: "0123456789",
    image: "",
  });

  return (
    <Box bg="gray.50" minH="100vh" py={12} px={{ base: 6, md: 16 }} mt={10}>
      <VStack gap={10} align="stretch" maxW="5xl" mx="auto">
        {/* Header */}
        <Heading
          size="lg"
          color="red.700"
          textAlign={{ base: "center", md: "left" }}
        >
          Profile Settings
        </Heading>

        {/* Profile Card */}
        <Card.Root bg="white" shadow="sm" rounded="2xl" p={{ base: 6, md: 10 }}>
          <VStack gap={8} align="stretch">
            {/* Profile Avatar Section */}
            <HStack
              align={{ base: "center", md: "flex-start" }}
              gap={{ base: 8, md: 12 }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <VStack gap={4} align="center">
                <Avatar.Root size="xl">
                  <Avatar.Image src={user.image} alt={user.name} />
                  <Avatar.Fallback>
                    {user.name
                      ? user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                      : "MM"}
                  </Avatar.Fallback>
                </Avatar.Root>

                <Button
                  size="sm"
                  colorPalette="red"
                  variant="outline"
                  width="full"
                  rounded="md"
                >
                  Upload New Photo
                </Button>
              </VStack>

              {/* User Info Inputs */}
              <VStack gap={5} flex="1" align="stretch" width="full">
                <Box>
                  <Text fontWeight="semibold" mb={1} color="gray.700">
                    Full Name
                  </Text>
                  <Input
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </Box>

                <Box>
                  <Text fontWeight="semibold" mb={1} color="gray.700">
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontWeight="semibold" mb={1} color="gray.700">
                    Phone Number
                  </Text>
                  <Input
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                  />
                </Box>
              </VStack>
            </HStack>

            <Separator />

            {/* Bank Info Section */}
            <VStack gap={5} align="stretch" width="full">
              <Heading size="md" color="red.600">
                Payment Information
              </Heading>
              <Text color="gray.600">
                These details are used for withdrawals when you sell a ticket.
              </Text>

              <Box>
                <Text fontWeight="semibold" mb={1} color="gray.700">
                  Bank Name
                </Text>
                <Input
                  placeholder="Enter bank name"
                  value={user.bankName}
                  onChange={(e) =>
                    setUser({ ...user, bankName: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={1} color="gray.700">
                  Account Number
                </Text>
                <Input
                  placeholder="Enter account number"
                  value={user.accountNumber}
                  onChange={(e) =>
                    setUser({ ...user, accountNumber: e.target.value })
                  }
                />
              </Box>
            </VStack>

            <Separator />

            {/* Save Button */}
            <HStack justify="flex-end">
              <Button
                bg="red.700"
                color="white"
                _hover={{ bg: "red.600" }}
                px={8}
                size="lg"
                rounded="lg"
              >
                Save Profile
              </Button>
            </HStack>
          </VStack>
        </Card.Root>
      </VStack>
    </Box>
  );
};

export default ProfilePage;

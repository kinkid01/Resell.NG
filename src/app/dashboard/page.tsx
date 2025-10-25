"use client";

import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  SimpleGrid,
  Badge,
  Button,
  Card,
  Table,
  Icon,
  Flex,
  Separator,
} from "@chakra-ui/react";
import { FiCreditCard, FiClock, FiShoppingBag } from "react-icons/fi";

const Page = () => {
  const transactions = [
    {
      id: 1,
      ticket: "Afrobeat Fest",
      buyer: "John Doe",
      status: "Completed",
      amount: "₦12,000",
      date: "20 Oct 2025",
    },
    {
      id: 2,
      ticket: "Enugu Flight",
      buyer: "Mariam",
      status: "Pending",
      amount: "₦25,000",
      date: "21 Oct 2025",
    },
    {
      id: 3,
      ticket: "Davido Live Concert",
      buyer: "Alex",
      status: "Completed",
      amount: "₦35,000",
      date: "22 Oct 2025",
    },
  ];

  const overviewCards = [
    {
      id: 1,
      title: "Total Earnings",
      value: "₦150,000",
      icon: FiCreditCard,
      color: "green.500",
    },
    {
      id: 2,
      title: "Pending Transactions",
      value: "2",
      icon: FiClock,
      color: "orange.400",
    },
    {
      id: 3,
      title: "Active Listings",
      value: "4",
      icon: FiShoppingBag,
      color: "blue.500",
    },
  ];

  return (
    <Box
      maxW="7xl"
      mx="auto"
      mt={10}
      p={{ base: 4, md: 8 }}
      bg="gray.50"
      minH="100vh"
    >
      <VStack gap={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading size="lg" color="red.700">
            Dashboard
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Manage your tickets, transactions, and earnings at a glance
          </Text>
        </Box>

        {/* Overview Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {overviewCards.map((card) => (
            <Card.Root
              key={card.id}
              bg="white"
              p={5}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              _hover={{ shadow: "md", transform: "scale(1.02)" }}
              transition="all 0.2s ease"
            >
              <HStack justify="space-between" mb={3}>
                <Icon as={card.icon} boxSize={6} color={card.color} />
              </HStack>
              <Text fontSize="sm" color="gray.500">
                {card.title}
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                {card.value}
              </Text>
            </Card.Root>
          ))}
        </SimpleGrid>

        <Separator my={4} />

        {/* Transactions Table */}
        <Box bg="white" rounded="2xl" shadow="sm" p={6}>
          <Heading size="md" mb={4}>
            Recent Transactions
          </Heading>

          <Table.Root size="md" variant="outline">
            <Table.Header>
              <Table.Row bg="gray.100">
                <Table.ColumnHeader>Ticket</Table.ColumnHeader>
                <Table.ColumnHeader>Buyer</Table.ColumnHeader>
                <Table.ColumnHeader>Status</Table.ColumnHeader>
                <Table.ColumnHeader>Amount</Table.ColumnHeader>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {transactions.map((tx) => (
                <Table.Row key={tx.id}>
                  <Table.Cell fontWeight="medium">{tx.ticket}</Table.Cell>
                  <Table.Cell>{tx.buyer}</Table.Cell>
                  <Table.Cell>
                    <Badge
                      colorPalette={
                        tx.status === "Completed" ? "green" : "orange"
                      }
                      variant="subtle"
                      rounded="full"
                      px={2}
                    >
                      {tx.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>{tx.amount}</Table.Cell>
                  <Table.Cell>{tx.date}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>

        {/* CTA */}
        <Flex justify="center" mt={6}>
          <Button
            bg="red.700"
            color="white"
            size="lg"
            rounded="lg"
            px={8}
            _hover={{ bg: "red.600" }}
          >
            Sell Ticket
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Page;

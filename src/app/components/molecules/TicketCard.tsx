import { Card, Button, Text, HStack, Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { MdOutlineStar } from "react-icons/md";

// Define props type for flexibility
interface TicketCardProps {
  img: string;
  title: string;
  category: string;
  date: string;
  marketPrice: string;
  discountPrice: string;
  rating?: string;
  transactions?: string;
  from?: string;
  to?: string;
  seat?: string;
  class?: string;
  network?: string;
  description?: string;
  location?: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  img,
  title,
  category,
  date,
  marketPrice,
  discountPrice,
  rating,
  transactions,
  from,
  to,
  seat,
  class: travelClass,
  network,
  description,
  location,
}) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius="2xl" shadow="md">
      <Box position="relative" w="full" h="300px">
        <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
      </Box>

      <Card.Body gap="4" p="5">
        {/* Title and category */}
        <VStack align="start">
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
          <Text color="gray.400" fontSize="sm">
            {category} • {location}
          </Text>
        </VStack>

        {/* Dynamic description based on available data */}
        <Card.Description color="gray.600" fontSize="sm">
          {category === "Flight" && (
            <>
              Flight: {from} → {to} <br />
              Date: {date} <br />
              Seat: {seat}, Class: {travelClass}
            </>
          )}

          {category === "Train" && (
            <>
              Train: {from} → {to} <br />
              Date: {date} <br />
              Seat: {seat}, Class: {travelClass}
            </>
          )}

          {category === "Airtime" && (
            <>
              Network: {network} <br />
              Date: {date}
            </>
          )}

          {category === "Movie" && (
            <>
              Movie: {title} <br />
              Date: {date}
            </>
          )}

          {category === "Concert" && (
            <>
              Event: {title} <br />
              {description && (
                <>
                  Description: {description}
                  <br />
                </>
              )}
              Date: {date}
            </>
          )}
        </Card.Description>

        {/* Prices */}
        <HStack justifyContent="space-between">
          <Text as="s" color="gray.400" fontSize="lg">
            ₦{marketPrice}
          </Text>
          <Text fontWeight="bold" fontSize="xl">
            ₦{discountPrice}
          </Text>
        </HStack>

        {/* Rating */}
        <HStack justifyContent="space-between">
          <Text color="gray.500" fontSize="sm">
            {transactions} transactions
          </Text>
          {rating && (
            <Text display="flex" alignItems="center" gap="1" fontSize="sm">
              <MdOutlineStar color="#FFD700" />
              {rating}
            </Text>
          )}
        </HStack>
      </Card.Body>

      <Card.Footer p="5">
        <Button
          width="full"
          bg="red.700"
          _hover={{ bg: "red.800" }}
          variant="solid"
        >
          Buy now via Escrow
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default TicketCard;

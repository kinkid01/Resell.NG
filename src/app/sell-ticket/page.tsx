import { HStack } from "@chakra-ui/react";
import React from "react";
import CreateTicket from "../components/templates/sellersForm/CreateTicket";
import TicketCarousel from "../components/templates/carousel/TicketCarousel";

const Page = () => {
  return (
    <HStack
      my={10}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <TicketCarousel />
      <CreateTicket />
      
    </HStack>
  );
};

export default Page;

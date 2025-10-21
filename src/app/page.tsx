import {
  Button,
  Heading,
  HStack,
  Menu,
  Portal,
  Separator,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import Banner from "./components/organisms/Banner";
import Searchbar from "./components/molecules/Searchbar";
import { IoFilter, IoPinOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import TicketCard from "./components/molecules/TicketCard";
import { ticketData } from "./constants/ticketData";

export default function Home() {
  return (
    <Stack pt={5} spaceY={10}>
      <Banner />

      {/* Filters */}

      <HStack justifyContent={"space-between"}>
        <Searchbar />

        <HStack>
          {/* ticket */}
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
                variant={"outline"}
              >
                <IoFilter /> Filter
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt">New Text File</Menu.Item>
                  <Menu.Item value="new-file">New File...</Menu.Item>
                  <Menu.Item value="new-win">New Window</Menu.Item>
                  <Menu.Item value="open-file">Open File...</Menu.Item>
                  <Menu.Item value="export">Export</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          {/* price */}
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
                variant={"outline"}
              >
                <GrMoney /> Price
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt">New Text File</Menu.Item>
                  <Menu.Item value="new-file">New File...</Menu.Item>
                  <Menu.Item value="new-win">New Window</Menu.Item>
                  <Menu.Item value="open-file">Open File...</Menu.Item>
                  <Menu.Item value="export">Export</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          {/* location */}
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
                variant={"outline"}
              >
                <IoPinOutline /> Location
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt">New Text File</Menu.Item>
                  <Menu.Item value="new-file">New File...</Menu.Item>
                  <Menu.Item value="new-win">New Window</Menu.Item>
                  <Menu.Item value="open-file">Open File...</Menu.Item>
                  <Menu.Item value="export">Export</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>
      </HStack>

      <Stack>
        <Heading fontWeight={"40px"} fontSize={"30px"}>
          Popular Listings
        </Heading>
        <Separator />

        {/* Card */}
         <SimpleGrid columns={[1, 2, 3]}>
      {ticketData.map((ticket, index) => (
        <TicketCard key={index} {...ticket} />
      ))}
    </SimpleGrid>
      </Stack>
    </Stack>
  );
}

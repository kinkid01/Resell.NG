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
                  <Menu.Item value="new-txt">Airplane Tickets</Menu.Item>
                  <Menu.Item value="new-file">Concert Tickets</Menu.Item>
                  <Menu.Item value="new-win">Airtime</Menu.Item>
                  <Menu.Item value="open-file">Train Tickets</Menu.Item>
                  <Menu.Item value="export">Movies Tickets</Menu.Item>
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
                  <Menu.Item value="new-txt">Default </Menu.Item>
                  <Menu.Item value="new-file">Lowest to highest</Menu.Item>
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
                  <Menu.Item value="new-txt">Lagos</Menu.Item>
                  <Menu.Item value="new-file">Abuja</Menu.Item>
                  <Menu.Item value="new-win">Benin</Menu.Item>
                  <Menu.Item value="open-file">Kaduna</Menu.Item>
                  <Menu.Item value="export">Ogun</Menu.Item>
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
        <SimpleGrid columns={[1, 2, 3]} spaceY={5}>
          {ticketData.map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}

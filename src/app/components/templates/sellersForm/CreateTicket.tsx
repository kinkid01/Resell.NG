"use client";

import { useState } from "react";
import {
  Box,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@chakra-ui/react";
import TrainForm from "../../molecules/ticketForms/TrainForm";
import ConcertForm from "../../molecules/ticketForms/ConcertForm";
import AirplaneForm from "../../molecules/ticketForms/AirplaneForm";
import AirtimeForm from "../../molecules/ticketForms/AirtimeTicket";
import MovieForm from "../../molecules/ticketForms/MovieForm";
import { GiCommercialAirplane, GiNetworkBars } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { IoMdTrain } from "react-icons/io";

const CreateTicket = () => {
  const [activeTab, setActiveTab] = useState("movies");

  return (
    <Box
      p={{ base: 4, md: 8 }}
      maxW="800px"
      mx="auto"
      w="full"
      bg="white"
      rounded="xl"
      shadow="sm"
    >
      <TabsRoot
        value={activeTab}
        onValueChange={(details) => setActiveTab(details.value)}
        variant="enclosed"
        colorPalette="red"
      >
        {/* Responsive Tabs List */}
        <Box overflowX="auto" w="full">
          <TabsList
            display="flex"
            justifyContent={{ base: "flex-start", md: "space-between" }}
            minW="max-content"
            gap={{ base: 2, md: 4 }}
            pb={2}
          >
            <TabsTrigger
              value="movies"
              display="flex"
              alignItems="center"
              gap={2}
              px={{ base: 3, md: 4 }}
              py={2}
              whiteSpace="nowrap"
            >
              <BiSolidCameraMovie size={18} /> Movies
            </TabsTrigger>

            <TabsTrigger
              value="airtime"
              display="flex"
              alignItems="center"
              gap={2}
              px={{ base: 3, md: 4 }}
              py={2}
              whiteSpace="nowrap"
            >
              <GiNetworkBars size={18} /> Airtime
            </TabsTrigger>

            <TabsTrigger
              value="airplane"
              display="flex"
              alignItems="center"
              gap={2}
              px={{ base: 3, md: 4 }}
              py={2}
              whiteSpace="nowrap"
            >
              <GiCommercialAirplane size={18} /> Airplane
            </TabsTrigger>

            <TabsTrigger
              value="concerts"
              display="flex"
              alignItems="center"
              gap={2}
              px={{ base: 3, md: 4 }}
              py={2}
              whiteSpace="nowrap"
            >
              <IoTicket size={18} /> Concert
            </TabsTrigger>

            <TabsTrigger
              value="train"
              display="flex"
              alignItems="center"
              gap={2}
              px={{ base: 3, md: 4 }}
              py={2}
              whiteSpace="nowrap"
            >
              <IoMdTrain size={18} /> Train
            </TabsTrigger>
          </TabsList>
        </Box>

        {/* Tabs Content */}
        <Box mt={6}>
          <TabsContent value="movies">
            <MovieForm />
          </TabsContent>

          <TabsContent value="airtime">
            <AirtimeForm />
          </TabsContent>

          <TabsContent value="airplane">
            <AirplaneForm />
          </TabsContent>

          <TabsContent value="concerts">
            <ConcertForm />
          </TabsContent>

          <TabsContent value="train">
            <TrainForm />
          </TabsContent>
        </Box>
      </TabsRoot>
    </Box>
  );
};
export default CreateTicket;

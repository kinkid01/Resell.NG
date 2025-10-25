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
    <Box p={8} maxW="800px" mx="auto">
      <TabsRoot
        value={activeTab}
        onValueChange={(details) => setActiveTab(details.value)}
        variant="enclosed"
        colorPalette="red"
      >
        <TabsList justifyContent="space-between" overflowX="auto">
          <TabsTrigger value="movies">
            <BiSolidCameraMovie /> Movies
          </TabsTrigger>
          <TabsTrigger value="airtime">
            <GiNetworkBars /> Airtime
          </TabsTrigger>
          <TabsTrigger value="airplane">
            <GiCommercialAirplane /> Airplane
          </TabsTrigger>
          <TabsTrigger value="concerts">
            <IoTicket /> Concert
          </TabsTrigger>
          <TabsTrigger value="train">
            <IoMdTrain /> Train
          </TabsTrigger>
        </TabsList>

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
      </TabsRoot>
    </Box>
  );
};
export default CreateTicket;

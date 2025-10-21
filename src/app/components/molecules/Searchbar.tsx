import { Button, Input, InputGroup } from "@chakra-ui/react";
import React from "react";
import { LuSearch } from "react-icons/lu";

const Searchbar = () => {
  return (
    <InputGroup
      startElement={<LuSearch />}
      endElement={
        <Button variant={"ghost"} _hover={{ color: "gray.400" }}>
          Search
        </Button>
      }
      width={"500px"}
    >
      <Input placeholder="Search contacts" />
    </InputGroup>
  );
};

export default Searchbar;

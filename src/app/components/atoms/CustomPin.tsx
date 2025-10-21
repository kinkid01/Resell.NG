import { Box } from "@chakra-ui/react";
import { IoPinSharp } from "react-icons/io5";

export const CustomPin = () => {
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-4px",
        width: "2px",
        height: "8px",
        bg: "gray.400",
        borderRadius: "full",
      }}
    >
      <IoPinSharp style={{ color: "red", fontSize: "22px" }} />
    </Box>
  );
};

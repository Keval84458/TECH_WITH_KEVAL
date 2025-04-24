"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NotificationModalsCard from "./notification-modals-card";
const NotificationModalsGrid = () => {
  const zipFileData = [
    {
      id: "Installation of Next Js",
      title: "Installation of Next Js",
      link: "",
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {zipFileData.map((fileDetails, inx, arr) => {
          return (
            <Box key={inx}>
              <NotificationModalsCard fileDetails={fileDetails} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default NotificationModalsGrid;

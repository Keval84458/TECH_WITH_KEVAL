"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import AnimationsEffectCard from "./animation-effect-card";
const AnimationsEffectGrid = () => {
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
              <AnimationsEffectCard fileDetails={fileDetails} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default AnimationsEffectGrid;

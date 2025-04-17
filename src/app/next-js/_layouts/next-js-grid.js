"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NextJsCard from "./next-js-card";
const NextJsGrid = () => {
  const zipFileData = [
    {
      id: "Installation of Next Js",
      thumbnail: "/Nextjs/Thumbnail/installationNEXTJs part2.png",
      title: "Installation of Next Js",
      link: "",
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2}>
        {zipFileData.map((fileDetails, inx, arr) => {
          return (
            <Box key={inx}>
              <NextJsCard fileDetails={fileDetails} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default NextJsGrid;

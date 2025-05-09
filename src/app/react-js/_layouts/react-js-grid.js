"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ReactJsCard from "./react-js-card";

const ReactJsGrid = () => {
  const zipFileData = [
    {
      id: "Build Ecommerce site using ReactJs",
      title: "Build Ecommerce site using ReactJs",
      link: "/Reactjs/zipFile/ECommerce.zip",
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {zipFileData.map((fileDetails, inx, arr) => {
          return (
            <Box key={inx}>
              <ReactJsCard fileDetails={fileDetails} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ReactJsGrid;

"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ReactJsCard from "./react-js-card";

const ReactJsGrid = () => {
  const zipFileData = [
    {
      id: "Installation to React Js",
      thumbnail: "/Reactjs/Thumbnails/install React js.png",
      title: "Installation to React Js",
      link: "",
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2}>
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

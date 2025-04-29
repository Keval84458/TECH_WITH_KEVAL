"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import CarousalSliderCard from "./carousal-slider-card";
const CarousalSlidersGrid = () => {
  const zipFileData = [
    {
      id: "React Slick",
      title: "React Slick",
      link: "/Carousals/ZipFile/react-slick.zip",
    },
    {
      id: "SwiperJs",
      title: "Swiper Js",
      link: "/Carousals/ZipFile/Swiper.zip",
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {zipFileData.map((fileDetails, inx, arr) => {
          return (
            <Box key={inx}>
              <CarousalSliderCard fileDetails={fileDetails} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CarousalSlidersGrid;

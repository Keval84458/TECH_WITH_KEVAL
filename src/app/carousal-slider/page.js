import { PageWrapper } from "@/utils";
import { Text } from "@chakra-ui/react";
import React from "react";
import CarousalSlidersGrid from "./_layouts/carousal-slider-grid";

const CarousalSlider = () => {
  return (
    <PageWrapper>
      <CarousalSlidersGrid />
    </PageWrapper>
  );
};

export default CarousalSlider;

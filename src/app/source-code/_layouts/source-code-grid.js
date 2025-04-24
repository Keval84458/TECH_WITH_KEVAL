"use client";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SourceCodeCard from "./source-code-card";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const SourceCodeGrid = () => {
  const sourceCodeLink = [
    // {
    //   id: "React Js full cource|2025",
    //   link: PAGE_PATH_KEYS.REACT_JS,
    //   img: "/CodeThumbnails/React.png",
    //   title: "React Js full cource|2025",
    // },
    // {
    //   id: "Next Js full cource|2025",
    //   link: PAGE_PATH_KEYS.NEXT_JS,
    //   img: "/CodeThumbnails/Next.png",
    //   title: "Next Js full cource|2025",
    // },
    // {
    //   id: "Animations & Effects",
    //   link: PAGE_PATH_KEYS.ANIMATION_EFFECT,
    //   img: "/CodeThumbnails/Animations.png",
    //   title: "Animations & Effects",
    // },
    // {
    //   id: "Notifications & Modals",
    //   link: PAGE_PATH_KEYS.NOTIFICATION_MODALS,
    //   img: "/CodeThumbnails/Notification.png",
    //   title: "Notifications & Modals",
    // },
    {
      id: "Carousal & Slider",
      link: PAGE_PATH_KEYS.CAROUSAL_SLIDER,
      img: "/Carousals/Sliders.png",
      title: "Carousal & Slider",
    },
    // {
    //   id: "Others",
    //   link: PAGE_PATH_KEYS.OTHERS,
    //   img: "/CodeThumbnails/Others.png",
    //   title: "Others",
    // },
  ];
  return (
    <Box>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2} mt={2}>
        {sourceCodeLink.map((sourceCode, inx, arr) => {
          return (
            <Box key={inx}>
              <SourceCodeCard sourceCode={sourceCode} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default SourceCodeGrid;

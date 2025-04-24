"use client";
import { Button, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const CarousalSliderCard = ({ fileDetails }) => {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden">
      <Stack>
        <CardBody p={3}>
          <Heading size="md" fontFamily="body">
            {fileDetails.title}
          </Heading>
          <Button
            as="a"
            href={fileDetails.link}
            download
            colorScheme="teal"
            variant="solid"
            size="sm"
            mt={2}
            _hover={{ transform: "scale(1.1)" }}
          >
            Download ZIP file
          </Button>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CarousalSliderCard;

"use client";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const ReactJsCard = ({ fileDetails }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={fileDetails.thumbnail}
          alt={fileDetails.id}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{fileDetails.title}</Heading>
          <Button
            as="a"
            href={fileDetails.link}
            download
            colorScheme="teal"
            variant="solid"
          >
            Download ZIP file
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ReactJsCard;

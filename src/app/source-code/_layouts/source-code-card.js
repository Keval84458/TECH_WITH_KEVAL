"use client";
import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

const SourceCodeCard = ({ sourceCode }) => {
  return (
    <>
      <Card
        maxW="sm"
        border="2px"
        borderColor="transparent"
        transition="all .5s ease"
        _hover={{ borderColor: "primary.20" }}
      >
        <CardBody>
          <Image
            src={sourceCode.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="center">
              {sourceCode.title}
            </Heading>
            <Button
              as={Link}
              href={sourceCode.link}
              bg="primary.400"
              _hover={{ bg: "primary.400" }}
              _disabled={{ bg: "primary.400" }}
            >
              Get Source Code
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default SourceCodeCard;

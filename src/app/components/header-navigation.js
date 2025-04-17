"use client";
import React from "react";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import DrawerCMP from "./drawer";
import Image from "next/image";

const HeaderNavigation = () => {
  const linkButtons = [
    {
      id: PAGE_PATH_KEYS.HOME,
      link: PAGE_PATH_KEYS.HOME,
      title: "Home",
    },
    {
      id: PAGE_PATH_KEYS.SOURCE_CODE,
      link: PAGE_PATH_KEYS.SOURCE_CODE,
      title: "Source Code",
    },
    {
      id: PAGE_PATH_KEYS.YOUTUBE,
      link: PAGE_PATH_KEYS.YOUTUBE,
      title: "Youtube",
    },
    {
      id: PAGE_PATH_KEYS.ABOUT_US,
      link: PAGE_PATH_KEYS.ABOUT_US,
      title: "About Us",
    },
  ];

  return (
    <>
      <Box
        bg="primary.500"
        boxShadow="sm"
        position="fixed"
        top={0}
        zIndex={999}
        left={0}
        w="100%"
      >
        <Flex h={16} alignItems={"center"}>
          <Box display={{ md: "none" }}>
            <DrawerCMP />
          </Box>

          <Flex alignItems="center" mx={{ md: 2 }}>
            <Image
              src="/logo/TechwithKeval.jpg"
              alt="Website Logo"
              width={55}
              height={100}
            />
            <Text ml={2} fontSize="175" fontWeight="bold">
              Tech with Keval
            </Text>
          </Flex>
          <HStack
            spacing={3}
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
            mx={4}
          >
            {linkButtons.map((btn, inx, arr) => {
              return (
                <Button
                  key={inx}
                  as={Link}
                  href={btn.link}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  _disabled={{ bg: "transparent" }}
                  px={1}
                >
                  {btn.title}
                </Button>
              );
            })}
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default HeaderNavigation;

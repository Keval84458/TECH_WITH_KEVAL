"use client";
import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";

export function DrawerCMP() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
    // {
    //   id: PAGE_PATH_KEYS.YOUTUBE,
    //   link: PAGE_PATH_KEYS.YOUTUBE,
    //   title: "Youtube",
    // },
    // {
    //   id: PAGE_PATH_KEYS.ABOUT_US,
    //   link: PAGE_PATH_KEYS.ABOUT_US,
    //   title: "About Us",
    // },
  ];

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg="transparent"
        _hover={{ bg: "transparent" }}
      >
        <TiThMenu size="1.5rem" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="white.100">
          <DrawerCloseButton />
          <DrawerHeader>TECH WITH KEVAL</DrawerHeader>

          <DrawerBody>
            <VStack>
              {linkButtons.map((btn, inx, arr) => {
                return (
                  <Button
                    key={inx}
                    as={Link}
                    href={btn.link}
                    bg="transparent"
                    _hover={{ bg: "transparent", color: "black.100" }}
                    _disabled={{ bg: "transparent" }}
                    size="lg"
                    onClick={onClose}
                  >
                    {btn.title}
                  </Button>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerCMP;

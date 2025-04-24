"use client";
import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { PAGE_PATH_KEYS } from "@/utils/constant";

const MotionText = motion(Text);

const HeroSection = () => {
  return (
    <Box>
      <MotionText
        textAlign="center"
        fontSize={{ base: "400", md: "600" }}
        fontWeight="bold"
        textShadow="4px 3px 3px rgba(0, 0, 0, 0.5)"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Welcome
      </MotionText>

      <MotionText
        textAlign="center"
        fontSize="400"
        fontWeight="bold"
        textShadow="4px 3px 3px rgba(0, 0, 0, 0.5)"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        To
      </MotionText>

      <MotionText
        textAlign="center"
        fontSize={{ base: "325", md: "700" }}
        fontWeight="bold"
        textShadow="4px 3px 3px rgba(0, 0, 0, 0.5)"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Tech with Keval
      </MotionText>

      <MotionText
        textAlign="center"
        fontSize={{ base: "150", md: "175" }}
        mt="1rem"
        textShadow="1px 2px 2px rgba(48, 89, 221, 0.5)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Code Smart. Learn Fast. Grow Big.
      </MotionText>

      <Flex justifyContent="center" alignItems="center" gap={2} mt={5}>
        <Button
          as={Link}
          href={PAGE_PATH_KEYS.SOURCE_CODE}
          size="lg"
          transition="all .5s ease"
          _hover={{ transform: "scale(1.1)", bg: "primary.100" }}
          _disabled={{ bg: "primary.100" }}
          bg="primary.100"
          color="white.100"
          px={4}
          gap={1}
        >
          <BiSolidRightArrow size="1.5rem" />
          Get Started
        </Button>
        <Button
          as={Link}
          href="https://www.youtube.com/@techwithkeval2211"
          size="lg"
          transition="all .5s ease"
          _hover={{ transform: "scale(1.1)", bg: "primary.100" }}
          _disabled={{ bg: "primary.100" }}
          bg="primary.100"
          color="white.100"
          px={4}
          gap={1}
        >
          <FaYoutube size="1.5rem" />
          Youtube
        </Button>
      </Flex>

      <Box mt={4} mb="1rem">
        <Text textAlign="center" fontSize="125">
          Hi, I&apos;m Keval, a passionate Frontend Developer and the creator of
          Tech with Keval. My goal is to simplify web development for learners
          and help aspiring developers crack their dream frontend jobs. On this
          channel, I share powerful coding tutorials, practical tips, and quick
          frontend interview questions through engaging YouTube Shorts. Whether
          you&apos;re diving into React, exploring Next.js, or preparing for
          your next tech interview, you&apos;re in the right place. Let&apos;s
          grow together—code smart, learn fast, and build something awesome!
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;

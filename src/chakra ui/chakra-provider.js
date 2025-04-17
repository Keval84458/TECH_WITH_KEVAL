"use client";
import { ChakraProvider as ChakraProviderCmp } from "@chakra-ui/react";
import theme from "./theme";

const ChakraProvider = ({ children }) => {
  return <ChakraProviderCmp theme={theme}>{children}</ChakraProviderCmp>;
};

export default ChakraProvider;

"use client";

import { Box } from "@chakra-ui/react";

export const PageWrapper = ({ children }) => {
  return (
    <Box p=".5rem" mb="1rem" mt="4rem">
      {children}
    </Box>
  );
};

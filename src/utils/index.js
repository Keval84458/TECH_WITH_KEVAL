"use client";

import { Box } from "@chakra-ui/react";

export const PageWrapper = ({ children, ...rest }) => {
  return (
    <Box p=".5rem" mb="1rem" mt="4rem" {...rest}>
      {children}
    </Box>
  );
};

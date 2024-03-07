import { type PropsWithChildren } from "react";
import { Box, VStack } from "@chakra-ui/react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box as="section" maxW="1280px" m="0 auto" p="2rem">
      <VStack spacing="verticalSpacing">{children}</VStack>
    </Box>
  );
}

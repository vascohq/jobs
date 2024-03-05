import { type PropsWithChildren } from "react";
import { Box, VStack } from "@chakra-ui/react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box>
      <VStack spacing="verticalSpacing">{children}</VStack>
    </Box>
  );
}

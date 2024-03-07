import { type PropsWithChildren } from "react";
import type * as CSS from "csstype";

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// This is my mini UI component library
// built on top on Chakra UI, we only expose
// what is actually useful for us (for now).
export function VascoTableContainer({ children }: PropsWithChildren) {
  return (
    <TableContainer
      bgColor="surface.light.bg"
      border="1px"
      borderColor="gray.200"
      borderRadius={5}
    >
      {children}
    </TableContainer>
  );
}

export function VascoTable({ children }: PropsWithChildren) {
  return (
    <Table
      style={{
        borderCollapse: "separate",
        borderSpacing: 0,
      }}
    >
      {children}
    </Table>
  );
}

export function VascoThead({ children }: PropsWithChildren) {
  return <Thead>{children}</Thead>;
}

export function VascoTbody({ children }: PropsWithChildren) {
  return <Tbody>{children}</Tbody>;
}

export function VascoTr({ children }: PropsWithChildren) {
  return <Tr>{children}</Tr>;
}

export function VascoThMain({ children }: PropsWithChildren) {
  return (
    <Th
      tabIndex={0}
      color="textColors.light.base"
      position="sticky"
      top={0}
      left={0}
      border={0}
      padding="16px"
      fontSize="lg"
      fontWeight="bold"
      textTransform="capitalize"
      letterSpacing={0}
    >
      {children}
    </Th>
  );
}

// The following Th and Td components share styling
const cellSharedStyles = {
  color: "textColors.light.base",
  bgColor: "surface.light.bg",
  borderTop: "1px",
  borderBottom: 0,
  borderColor: "gray.200",
  padding: "8px 20px 8px 60px",
  _last: {
    position: "sticky",
    right: 0,
    width: 0,
    padding: "0",
    boxShadow: "0px 10px 15px 5px rgba(184,184,184,0.25)",
  },
};

export function VascoTh({
  children,
  bgColor,
  fontWeight,
  scope,
  textAlign,
  tabIndex = 0,
  "aria-hidden": ariaHidden = false,
}: PropsWithChildren<{
  scope?: "row" | "col";
  bgColor?: CSS.Property.BackgroundColor;
  fontWeight?: CSS.Property.FontWeight;
  textAlign?: CSS.Property.TextAlign;
  tabIndex?: number;
  "aria-hidden"?: boolean;
}>) {
  return (
    <Th
      tabIndex={tabIndex}
      textAlign={textAlign}
      {...(ariaHidden
        ? {
            "aria-hidden": ariaHidden,
          }
        : {})}
      scope={scope}
      sx={{
        ...cellSharedStyles,
        _first: {
          borderRight: "1px",
          borderColor: "gray.200",
          minWidth: "220px",
          boxShadow: "5px 10px 15px 0px rgba(184,184,184,0.25)",
          padding: "8px 10px",
          position: "sticky",
          left: 0,
        },
        ...(bgColor ? { bgColor } : {}),
        fontWeight: fontWeight || "400",
        fontSize: "md",
        textTransform: "capitalize",
        letterSpacing: 0,
      }}
    >
      {children}
    </Th>
  );
}

export function VascoTd({
  children,
  highlight,
  textAlign,
  tabIndex = 0,
  "aria-hidden": ariaHidden = false,
}: PropsWithChildren<{
  highlight?: boolean;
  textAlign?: CSS.Property.TextAlign;
  tabIndex?: number;
  "aria-hidden"?: boolean;
}>) {
  return (
    <Td
      tabIndex={tabIndex}
      textAlign={textAlign}
      {...(ariaHidden
        ? {
            "aria-hidden": ariaHidden,
          }
        : {})}
      sx={{
        ...cellSharedStyles,
        ...(highlight
          ? { bgColor: "surface.light.highlight", color: "brand.primary" }
          : {}),
      }}
    >
      {children}
    </Td>
  );
}

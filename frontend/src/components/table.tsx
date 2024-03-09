import { ChangeEvent, useState, type PropsWithChildren } from "react";
import type * as CSS from "csstype";

import {
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { currency, isNumber } from "../utils";
import { ValueType } from "../types";

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
  padding: "8px 20px 8px 20px",
  minWidth: "150px",
  _last: {
    position: "sticky",
    right: "0",
    width: "0",
    minWidth: "0",
    padding: "0",
    boxShadow: "0px 10px 15px 5px rgba(184,184,184,0.25)",
  },
};

const cellSharedHeadingStyles = {
  bgColor: "gray.50",
  fontWeight: "bold",
};

const cellSharedHeadingBorders = {
  borderLeft: "1px",
  borderRight: "1px",
  borderLeftColor: "gray.200",
  borderRightColor: "gray.200",
};

export function VascoTh({
  children,
  scope,
  textAlign,
  tabIndex = 0,
  withHeadingStyles,
  withBorders,
  "aria-hidden": ariaHidden,
}: PropsWithChildren<{
  scope?: "row" | "col";
  textAlign?: CSS.Property.TextAlign;
  tabIndex?: number;
  withHeadingStyles?: boolean;
  withBorders?: boolean;
  "aria-hidden"?: boolean | undefined;
}>) {
  return (
    <Th
      tabIndex={tabIndex}
      textAlign={textAlign}
      aria-hidden={ariaHidden}
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
        fontWeight: "400",
        fontSize: "md",
        textTransform: "capitalize",
        letterSpacing: 0,
        ...(withHeadingStyles ? { ...cellSharedHeadingStyles } : {}),
        ...(withBorders ? { ...cellSharedHeadingBorders } : {}),
      }}
    >
      {children}
    </Th>
  );
}

export function VascoTd({
  children,
  isEditable,
  withHeadingStyles,
  withBorders,
  textAlign,
  tabIndex = 0,
  "aria-hidden": ariaHidden,
}: PropsWithChildren<{
  isEditable?: boolean;
  withHeadingStyles?: boolean;
  withBorders?: boolean;
  textAlign?: CSS.Property.TextAlign;
  tabIndex?: number;
  "aria-hidden"?: boolean | undefined;
}>) {
  return isEditable ? (
    <Td
      color="brand.primary"
      bgColor="surface.light.bg"
      borderTop="1px"
      borderBottom="0"
      borderColor="gray.200"
      padding="0"
      textAlign={textAlign}
      minWidth="150px"
    >
      {children}
    </Td>
  ) : (
    <Td
      tabIndex={tabIndex}
      textAlign={textAlign}
      aria-hidden={ariaHidden}
      sx={{
        ...cellSharedStyles,
        ...(withHeadingStyles ? { ...cellSharedHeadingStyles } : {}),
        ...(withBorders ? { ...cellSharedHeadingBorders } : {}),
      }}
    >
      {children}
    </Td>
  );
}

export function VascoTdInput({
  defaultValue,
  onChange,
  type,
  valueType,
  "data-row-id": dataRow,
  "data-cell-index": dataCell,
}: {
  defaultValue: string | number;
  onChange?: (rowId: string, cellIndex: string, value: string) => void;
  type: "number" | "text"; // subset will do for now
  valueType: ValueType;
  "data-row-id"?: string;
  "data-cell-index"?: string;
}) {
  const [value, setValue] = useState(() =>
    valueType === ValueType.Currency
      ? currency.format(defaultValue as number)
      : defaultValue
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { dataset, value } = event.target;
    const { rowId, cellIndex } = dataset;

    if (onChange && rowId && cellIndex && value) {
      if (valueType === ValueType.Currency) {
        const cleanValue = value.replace(/[^0-9.-]+/g, "");
        if (isNumber(cleanValue)) {
          setValue(currency.format(Number(cleanValue)));
          onChange(rowId, cellIndex, cleanValue);
        }
      } else {
        setValue(value);
        onChange(rowId, cellIndex, value);
      }
    }
  };

  return (
    <Input
      value={value}
      data-row-id={dataRow}
      data-cell-index={dataCell}
      bgColor="surface.light.highlight"
      color="brand.primary"
      onChange={handleOnChange}
      padding="8px 20px"
      width="100%"
      textAlign="end"
      type={type}
    />
  );
}

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

// Why ChakraBaseProvider?
// https://chakra-ui.com/getting-started#chakrabaseprovider

// This is a minimal version of ChakraProvider
// that only supplies theme tokens and not
// the default component theming.

// One of the biggest causes of the large initial
// JS payload is the size of the component themes.
// With the following approach, you get to apply
// the default themes for just the components you need
// by using extendBaseTheme.

const { Button, Table } = chakraTheme.components;

const theme = extendBaseTheme({
  colors: {
    brand: {
      primary: "#0350FE",
    },
    gray: {
      "50": "#F6F7F8",
      "100": "#EEEFF2",
      "200": "#DDDFE4",
    },
    borderColors: {
      light: "gray.200",
    },
    textColors: {
      light: "#1A1C21",
    },
    surface: {
      light: "white",
    },
  },
  space: {
    verticalSpacing: "32px",
  },
  components: {
    Button,
    Table,
  },
});

export { ChakraBaseProvider, theme };

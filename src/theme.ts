// Located at: mqtt-scada-ui/src/theme.ts
// Material-UI theme configuration
// MAINTAINER: MLADEN čUPEN

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Example primary color
    },
    secondary: {
      main: "#6c757d", // Example secondary color
    },
    background: {
      default: "#f8f9fa", // Light background
      paper: "#ffffff", // Card/paper background
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#343a40", // Darker app bar
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#f8f9fa", // Light sidebar background
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.active": {
            backgroundColor: "rgba(0, 123, 255, 0.1)", // Light blue for active item
            color: "#007bff",
            "& .MuiTypography-root": {
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
});

export default theme;

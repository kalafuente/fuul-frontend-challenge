import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra más sutil
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          textAlign: 'center',
          backgroundColor: '#4457ff',
          borderRadius: '100px',
          padding: '15px',
          fontWeight: 700,

          textDecoration: 'none',
          '&:hover': {
            backgroundColor: '#3346d8',
          },
        },
      }
    },
  },
});
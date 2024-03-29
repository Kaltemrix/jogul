import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#378BA9",
            light: "#3587A4",
            dark: "#2D728B" 
        },
        background: {
            default: "#f9f5f2"
        }
    },
    typography: {
        h1: {
            fontSize: 56,
            fontWeight: "bolder"
        }
    }
});

export default theme;
import {createTheme} from "@mui/material";

export const main = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            customSmall: 400,
        }
    },
    typography: {
        fontFamily: [
            'SF Pro Display',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {borderRadius: 8}
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                colorPrimary: {
                    '&.MuiSvgIcon-root': {
                        fontSize: 18,
                    },
                    '&.MuiCheckbox-root': {
                        padding: 0,
                        margin: '0 10px',
                    },
                    '&.MuiFormControlLabel-root-label': {
                        color: 'gray'
                    },
                    '&.Mui-checked': {
                        backgroundColor: 'black',
                    },
                    '& svg': {
                        scale: 1.4,
                        fill: 'yellow'
                    },
                },
            }
        },
    },
});
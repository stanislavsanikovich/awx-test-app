import {createTheme} from "@mui/material";

export const currencyInput = createTheme({
    components: {
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderWidth: 1,
                    padding: '0',
                    border: '2px solid transparent',
                    borderRadius: 4,
                    background: "white!important", // использовал important чтобы не определять стиль на все случаи: focus, hover, итд
                    '&.Mui-focused': {
                        borderColor: '#1976d2',
                    },
                },
                input: {
                    textAlign: 'center'
                }
            }
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    margin: '16px 0 0 0'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    textAlign: 'center',
                },
                shrink: {
                    margin: "0 auto",
                    position: "absolute",
                    right: "0",
                    left: "0",
                    width: "150px",
                    color: 'gray!important'
                }
            }
        },
    },
});
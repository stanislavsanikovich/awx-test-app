import {Container, createTheme, ThemeProvider} from '@mui/material';
import './App.css';
import RequisitesPage from "./pages/PaymentPage";
import {main} from "./themes/Main";

function App() {
    return (
        <Container maxWidth="sm" className='app' disableGutters>
            <ThemeProvider theme={main}>
                <RequisitesPage/>
            </ThemeProvider>
        </Container>
    );
}

export default App;
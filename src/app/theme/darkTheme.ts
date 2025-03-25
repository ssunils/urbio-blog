import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { typography } from './theme';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#fe4f02",
            light: '#63a4ff',
            dark: '#004ba0',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: '#000',
            paper: '#111',
        },
    },
    typography
});

export default darkTheme;
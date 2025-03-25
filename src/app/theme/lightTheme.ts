import { createTheme, PaletteOptions } from '@mui/material/styles';
import { typography } from './theme';
import { blue } from '@mui/material/colors';


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#fe4f02",
            light: '#63a4ff',
            dark: '#004ba0',
            contrastText: '#000'
        },
        secondary: {
            main: '#000',
        },
        background: {
            default: '#fff',
            paper: '#f1f1f1',
            
        },
        text: {
            primary: '#000',
            secondary: '#333',
            disabled: '#666',
        },
        divider: '#ddd',
        action: {
            active: '#000',
            hover: '#f1f1f1',
            selected: '#f1f1f1',
            disabled: '#f1f1f1',
            disabledBackground: '#f1f1f1',
        },
    },
    typography
});

export default lightTheme;

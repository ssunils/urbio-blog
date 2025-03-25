import { createTheme } from '@mui/material/styles';
import { typography } from '.';
import { blue } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[400],     
      light: '#63a4ff',    
      dark: '#004ba0',     
      contrastText: '#000' 
    },
    secondary: {
      main:'#000',
    },
  },
  typography
});

export default lightTheme;

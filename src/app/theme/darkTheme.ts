import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { typography } from '.';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[400],     
      light: '#63a4ff',    
      dark: '#004ba0',     
      contrastText: '#ffffff' 
    },
    secondary: {
      main:'#fff',
    },
  },
  typography
});

export default darkTheme;
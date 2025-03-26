'use client';

import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';


 const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRegistry;
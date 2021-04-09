import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from '../src/theme';

export const themeDecorator = (Story, context) => {
  const { theme } = context.globals;
  const muTheme = createMuiTheme(theme === 'dark' ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={muTheme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  );
};

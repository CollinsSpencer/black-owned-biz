import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { addDecorator, addParameters } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { darkTheme, lightTheme } from '../src/theme';
import StoryRouter from 'storybook-react-router';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createMuiTheme(serialTheme);
  return (
    <ThemeProvider theme={muTheme}>
      <CssBaseline />
      <Container maxWidth='sm'>{children}</Container>
    </ThemeProvider>
  );
};

addDecorator(StoryRouter());
addDecorator(withThemes(null, [lightTheme, darkTheme], { providerFn }));
addParameters({
  options: {
    panelPosition: 'right',
  },
});

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { addDecorator, addParameters } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import StoryRouter from 'storybook-react-router';
import { withKnobs } from '@storybook/addon-knobs';

import { FakeAuthProvider } from './fake-firebase';
import { darkTheme, lightTheme } from '../src/theme';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createMuiTheme(serialTheme);
  return (
    <ThemeProvider theme={muTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const withAuth = () => (storyFn) => (
  <FakeAuthProvider>{storyFn()}</FakeAuthProvider>
);

addDecorator(StoryRouter());
addDecorator(withAuth());
addDecorator(withThemes(null, [lightTheme, darkTheme], { providerFn }));
addDecorator(withKnobs());
addParameters({
  options: {
    panelPosition: 'right',
  },
});

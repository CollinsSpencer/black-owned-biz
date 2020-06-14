import { createMuiTheme } from '@material-ui/core/styles';
import { heatwood } from './fonts/Heatwood';

// A custom theme for this app
const theme = {
  name: 'Light Theme',
  palette: {
    type: 'light',
    common: {
      black: '#231F20',
      white: '#FDF7EB',
    },
    primary: {
      main: '#B6862C',
    },
    secondary: {
      main: '#053834',
    },
  },
  typography: { h1: { fontFamily: 'Heatwood', lineHeight: 2 } },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [heatwood],
      },
    },
  },
};

export const darkTheme = createMuiTheme({
  ...theme,
  name: 'Dark Theme',
  palette: {
    ...theme.palette,
    type: 'dark',
  },
});

export const lightTheme = createMuiTheme(theme);

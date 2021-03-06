import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import heatwood from './fonts/Heatwood';
import geosansLight from './fonts/GeosansLight';
import 'fontsource-roboto';

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
      main: '#231F20',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Heatwood',
      lineHeight: 2,
    },
    h2: {
      fontFamily: 'Heatwood',
      lineHeight: 2,
    },
    h3: {
      fontFamily: 'Geosans Light',
    },
    h4: {
      fontFamily: 'Geosans Light',
    },
    h5: {
      fontFamily: 'Geosans Light',
    },
    h6: {
      fontFamily: 'Geosans Light',
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontStyle: 'italic',
    },
    body1: {
      fontFamily: 'Roboto',
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [heatwood, geosansLight],
      },
    },
  },
};

// TODO: Make a dark theme
export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...theme,
    name: 'Dark Theme',
    palette: {
      ...theme.palette,
      type: 'dark',
    },
  }),
);

export const lightTheme = responsiveFontSizes(createMuiTheme(theme));

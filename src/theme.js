import { createMuiTheme } from '@material-ui/core/styles';

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

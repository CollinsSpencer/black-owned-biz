import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { darkTheme, lightTheme } from './theme';
import { AuthProvider, AnalyticsProvider } from './services/firebase';

const Index = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => (prefersDarkMode ? darkTheme : lightTheme), [
    prefersDarkMode,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.StrictMode>
        <AnalyticsProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </AnalyticsProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

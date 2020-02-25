import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 320,
      md: 720,
      lg: 1140,
    }
  },
  palette: {
    primary: {
      light: '#7fb9f1',
      main: '#0074e4',
      dark: '#003a72'
    },
    secondary: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    caption: {
      fontWeight: 300,
    }
  }
});

export default theme;

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
  CssBaseline,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Routes from './routes';


const useStyles = makeStyles(theme => ({
  root: {    
    padding: theme.spacing(1),
    width: 320,
    [theme.breakpoints.up(720)]: {
      width: 720,
    },
    [theme.breakpoints.up(1140)]: {
      width: 1140,
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        className={classes.root}
      >
        <Router>
          <Routes />
        </Router>
      </Container>
    </ThemeProvider>
  );
}
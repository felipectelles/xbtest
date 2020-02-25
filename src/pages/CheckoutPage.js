import React, { useMemo } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format } from '../util/currency';
import LinkRouterButton from '../components/link-router-button/LinkRouterButton';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    justifyContent: 'center'
  },
  body: {    
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    '& h1': {
      textAlign: 'center',
    },
    '& h2': {
      textAlign: 'center',
      fontSize: '1.3em',
      lineHeight: 1.1,
      marginTop: theme.spacing(1),
    },
    '& a': {
      marginTop: theme.spacing(2),
      height:  theme.spacing(5),
      width: '70%',
    },
  },
  image: {
    height: '140px',
    width: '140px',
    backgroundImage: 'url(/img/purchase.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  price: {
    color: theme.palette.primary.light,
  }
}));

export default function CheckoutPage({location}) {
  const classes = useStyles();
  const product = useSelector(state => state.cart.product);
  const total = useMemo(
    () => format(product.reduce((acc, item) => acc + (item.price * item.quantity), 0)), 
    [product]
  );

  return (
    <Grid
      container
      className={classes.root}
    >
      <Grid
        item
        className={classes.body}
        >
        <Typography
          component="h1"
          variant="h5"
        >
          {location.state.name},
        </Typography>
        <Typography
          component="h2"
          variant="h6"
        >
          Sua compra no valor de
          <span className={classes.price}>
            {` ${total} `}
          </span>
          foi finalizada com sucesso
        </Typography>
        <Box className={classes.image} />
        <LinkRouterButton
          className={classes.button}
          url="/">
            Iniciar nova compra
        </LinkRouterButton>
      </Grid>
    </Grid>
  );
}
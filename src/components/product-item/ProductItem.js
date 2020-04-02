import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import Collapse from '@material-ui/core/Collapse';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NumberCounter from '../number-counter/NumberCounter';
import { format } from '../../util/currency';
import * as CartActions from '../../store/modules/cart/actions';

const useStyles = makeStyles(theme => ({
  paper: {
    position: "relative",
    height: 400,
    padding: theme.spacing(1),
    margin: 'auto',
    minWidth: 224,
    maxWidth: 320,
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    '& #description': {
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      padding: theme.spacing(2),
    }
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));

export default function ProductItem({product}) {
  const classes = useStyles();  
  const [elevation, setElevation] = useState(0);
  const [selected, setSelected] = useState(false);
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CartActions.resetCart());
  }, [dispatch]);

  const handleMouseEnter = () => {
    setElevation(3);
    setSelected(true);
  }

  const handleMouseLeave = () => {
    setElevation(0);
    setSelected(false);
  }

  const onHandleAddProduct = () => {
    dispatch(CartActions.addToCart({
      title: product.title,
      price: product.price,
      quantity: counter,
    }));
    setCounter(0);
  }
  
  return (
    <Grid
      item
      sm={12}
      md={4}
      lg={3}
    >
      <Paper
        className={classes.paper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        elevation={elevation}>        
        <img 
            className={classes.img}
            alt={product.title}
            src={product.url} />
        <Grid
          id="description"
          container
          direction="column"
        >          
          <Typography
            variant="body2"
            component="h2"
            color="textSecondary">
            {product.title}
          </Typography>
          <Typography
            variant="h6"
            component="h3">
            {format(product.price)}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary">
            Em até 12x de R$ {format(product.price/12)}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary">
            {format(product.price*.9)} à vista (10% de desconto)
          </Typography>
          <Collapse in={selected}>
            <Box>
              <NumberCounter
                counter={counter}
                onAdd={() => setCounter(counter+1)}
                onRemove={() => counter && setCounter(counter-1)}
              />
              <Button
                onClick={() => onHandleAddProduct()}
                fullWidth
                color="primary"
                variant="contained" >
                Adicionar
              </Button>
            </Box>
          </Collapse>
        </Grid>
      </Paper>
    </Grid>
  );
}
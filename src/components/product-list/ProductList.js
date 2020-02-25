import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import products from '../../api/product';
import ProductItem from '../product-item/ProductItem';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function ProductList() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      spacing={2}>
      {products.map(product => (
        <ProductItem
          key={product.title} 
          product={product}
          onAddProductItem={() => console.log('ok')} />
      ))}
    </Grid>
  );
}
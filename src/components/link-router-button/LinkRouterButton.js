import React from 'react';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function LinkRouterButton({ url, children, type = 'button' }) {
  return (
    <Button
      component={RouterLink}
      fullWidth
      color="secondary"
      variant="contained"
      type={type}
      to={url}
    >
      {children}
    </Button>
  );
}
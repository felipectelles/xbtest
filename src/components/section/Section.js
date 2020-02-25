import React from 'react';
import { Typography, Divider } from '@material-ui/core';

export default function Section({title, children, type}) {
  return (
    <div>
      <Typography
        variant="h5"
        component={type}
      >
        {title}
      </Typography>
      <Divider />
      {children}
    </div>
  );
}
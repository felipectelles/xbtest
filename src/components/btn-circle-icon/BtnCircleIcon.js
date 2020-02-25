import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'rgba(0, 0, 0, 0.06)',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.12)'
    }
  },
});

export default function BtnCircleIcon({ children, onClick }) {
  const classes = useStyles();
  return (
    <div>
      <IconButton
        onClick={onClick && (() => onClick())}
        className={classes.root}>
        {children}
      </IconButton>
    </div>
  );
}
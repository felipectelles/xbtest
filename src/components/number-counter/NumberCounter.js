import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BtnAdd from '../btn-circle-icon-add/BtnCircleIconAdd';
import BtnRemove from '../btn-circle-icon-remove/BtnCircleIconRemove';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1)
  },
  counterWrapper: {
    width: '60%',
    height: theme.spacing(5),
    border: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function NumberCounter({ counter, onAdd, onRemove }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>      
      <BtnRemove onClick={() => onRemove()}/>
      <Box className={classes.counterWrapper}>
        {counter}
      </Box>
      <BtnAdd onClick={() => onAdd()}/>
    </Box>
  );
}
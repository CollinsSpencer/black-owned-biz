import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '12em',
    height: '12em',
    textTransform: 'none',
  },
  label: {
    // Aligns the content of the button vertically.
    flexDirection: 'column',
  },
}));

export const SquareButton = (props) => {
  const classes = useStyles();

  return (
    <Button classes={{ root: classes.button, label: classes.label }} {...props}>
      {props.children}
    </Button>
  );
};

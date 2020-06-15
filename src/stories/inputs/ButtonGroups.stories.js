import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default { title: 'Material-UI/Inputs' };

export const ButtonGroups = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        variant='contained'
        color='primary'
        aria-label='contained primary button group'
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        variant='text'
        color='primary'
        aria-label='text primary button group'
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

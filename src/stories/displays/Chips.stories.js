import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default { title: 'Material-UI/Displays' };

const NormalChips = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip label='Basic' />
      <Chip label='Disabled' disabled />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label='Clickable'
        onClick={handleClick}
      />
      <Chip
        avatar={<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />}
        label='Deletable'
        onDelete={handleDelete}
      />
      <Chip
        icon={<FaceIcon />}
        label='Clickable deletable'
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label='Custom delete icon'
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip label='Clickable Link' component='a' href='#chip' clickable />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label='Primary clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        icon={<FaceIcon />}
        label='Primary clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip label='Deletable primary' onDelete={handleDelete} color='primary' />
      <Chip
        icon={<FaceIcon />}
        label='Deletable secondary'
        onDelete={handleDelete}
        color='secondary'
      />
    </div>
  );
};

const OutlinedChips = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip label='Basic' variant='outlined' />
      <Chip label='Disabled' disabled variant='outlined' />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label='Clickable'
        onClick={handleClick}
        variant='outlined'
      />
      <Chip
        avatar={<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />}
        label='Deletable'
        onDelete={handleDelete}
        variant='outlined'
      />
      <Chip
        icon={<FaceIcon />}
        label='Clickable deletable'
        onClick={handleClick}
        onDelete={handleDelete}
        variant='outlined'
      />
      <Chip
        label='Custom delete icon'
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant='outlined'
      />
      <Chip
        label='Clickable link'
        component='a'
        href='#chip'
        clickable
        variant='outlined'
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label='Primary clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant='outlined'
      />
      <Chip
        icon={<FaceIcon />}
        label='Primary clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant='outlined'
      />
      <Chip
        label='Deletable primary'
        onDelete={handleDelete}
        color='primary'
        variant='outlined'
      />
      <Chip
        icon={<FaceIcon />}
        label='Deletable secondary'
        onDelete={handleDelete}
        color='secondary'
        variant='outlined'
      />
    </div>
  );
};

const SmallChips = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip size='small' label='Basic' />
      <Chip
        size='small'
        avatar={<Avatar>M</Avatar>}
        label='Clickable'
        onClick={handleClick}
      />
      <Chip
        size='small'
        avatar={<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />}
        label='Deletable'
        onDelete={handleDelete}
      />
      <Chip
        size='small'
        icon={<FaceIcon />}
        label='Clickable Deletable'
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        size='small'
        label='Custom delete icon'
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size='small'
        label='Clickable Link'
        component='a'
        href='#chip'
        clickable
      />
      <Chip
        size='small'
        avatar={<Avatar>M</Avatar>}
        label='Primary Clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size='small'
        icon={<FaceIcon />}
        label='Primary Clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size='small'
        label='Deletable Primary'
        onDelete={handleDelete}
        color='primary'
      />
      <Chip
        size='small'
        icon={<FaceIcon />}
        label='Deletable Secondary'
        onDelete={handleDelete}
        color='secondary'
      />
    </div>
  );
};

const SmallOutlinedChips = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip variant='outlined' size='small' label='Basic' />
      <Chip
        variant='outlined'
        size='small'
        avatar={<Avatar>M</Avatar>}
        label='Clickable'
        onClick={handleClick}
      />
      <Chip
        variant='outlined'
        size='small'
        avatar={<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />}
        label='Deletable'
        onDelete={handleDelete}
      />
      <Chip
        variant='outlined'
        size='small'
        icon={<FaceIcon />}
        label='Clickable deletable'
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        variant='outlined'
        size='small'
        label='Custom delete icon'
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant='outlined'
        size='small'
        label='Clickable link'
        component='a'
        href='#chip'
        clickable
      />
      <Chip
        variant='outlined'
        size='small'
        avatar={<Avatar>M</Avatar>}
        label='Primary clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant='outlined'
        size='small'
        icon={<FaceIcon />}
        label='Primary clickable'
        clickable
        color='primary'
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant='outlined'
        size='small'
        label='Deletable primary'
        onDelete={handleDelete}
        color='primary'
      />
      <Chip
        variant='outlined'
        size='small'
        icon={<FaceIcon />}
        label='Deletable secondary'
        onDelete={handleDelete}
        color='secondary'
      />
    </div>
  );
};

export const Chips = () => (
  <>
    <NormalChips />
    <hr />
    <OutlinedChips />
    <hr />
    <SmallChips />
    <hr />
    <SmallOutlinedChips />
  </>
);

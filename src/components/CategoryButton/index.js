/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  categoryButton: {
    padding: 0,
    overflow: 'hidden',
  },
  categoryButtonImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: (props) => `url('${props.imagePath}')`,
  },
  categoryButtonIcon: {
    fontSize: '6rem',
  },
}));

const CategoryButton = ({ code, IconComponent, imagePath, name }) => {
  const style = useStyles({ imagePath });
  const { url } = useRouteMatch();

  // TODO: Incorporate these into a larger design system possibly maybe
  const flexCol = { display: 'flex', flexDirection: 'column' };
  const flexRowCC = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };

  return (
    <Button
      className={style.categoryButton}
      color="secondary"
      component={RouterLink}
      fullWidth
      to={`${url}/${code}`}
      variant="contained"
    >
      <Box {...flexCol} flexGrow={1} overflow="hidden" height="256px">
        <Box {...flexRowCC} flexGrow={3} className={style.categoryButtonImage}>
          <IconComponent className={style.categoryButtonIcon} />
        </Box>
        <Box {...flexRowCC} flexGrow={1}>
          <Typography variant="button">{name.toUpperCase()}</Typography>
        </Box>
      </Box>
    </Button>
  );
};

CategoryButton.propTypes = {
  code: PropTypes.string.isRequired,
  IconComponent: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryButton;

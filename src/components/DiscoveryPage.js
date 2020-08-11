/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

import Navigation from './Navigation';
import Assets from '../assets';

const useStyles = makeStyles(() => ({
  discoveryPageTitle: {
    backgroundImage: `url('${Assets.discoveryPageTitleBanner}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '256px',
  },
}));

const DiscoveryPage = ({ children, subtitle, title }) => {
  const params = useParams();
  const style = useStyles();

  const flexColCC = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <>
      <Navigation {...params} />
      <Container>
        <Box {...flexColCC} my={12} className={style.discoveryPageTitle}>
          <Typography variant="h2" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {subtitle}
          </Typography>
        </Box>
        {children}
      </Container>
    </>
  );
};

DiscoveryPage.propTypes = {
  children: PropTypes.element.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DiscoveryPage;

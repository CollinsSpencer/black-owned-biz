/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

import Assets from '../assets';
import Page from './Page';

const useStyles = makeStyles(() => ({
  discoveryPageTitle: {
    backgroundImage: `url('${Assets.discoveryPageTitleBanner}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '256px',
  },
}));

const DiscoveryPage = ({ children, subtitle, heading, title }) => {
  const style = useStyles();

  const flexColCC = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <Page title={title}>
      <Box {...flexColCC} my={12} className={style.discoveryPageTitle}>
        <Typography component="h1" variant="h2" align="center">
          {heading}
        </Typography>
        <Typography component="h2" variant="h4" align="center">
          {subtitle}
        </Typography>
      </Box>
      {children}
    </Page>
  );
};

DiscoveryPage.propTypes = {
  children: PropTypes.element.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};
DiscoveryPage.defaultProps = {
  subtitle: null,
};

export default DiscoveryPage;

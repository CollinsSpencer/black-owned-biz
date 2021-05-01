import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

import Page from './Page';

const BadRoutePage = ({ children, heading, subtitle, title }) => (
  <Page title={title}>
    <Box my={12}>
      <Typography component="h1" variant="h2" align="center">
        Whoops!
      </Typography>
    </Box>
    <Typography component="h2" variant="h3" align="center">
      {heading}
    </Typography>
    <Box mt={8}>
      <Typography align="center">{subtitle}</Typography>
    </Box>
    {children}
  </Page>
);

BadRoutePage.propTypes = {
  children: PropTypes.element.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
};
BadRoutePage.defaultProps = {
  subtitle: null,
  title: 'Bad Route',
  heading: null,
};

export default BadRoutePage;

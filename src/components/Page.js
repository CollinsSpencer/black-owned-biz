/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

import { useTitle } from '../helpers/hooks';
import Navigation from './Navigation';

const Page = ({ children, title }) => {
  useTitle(title);

  return (
    <>
      <Navigation />
      <Container>{children}</Container>
      {/* TODO: footer */}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
Page.defaultProps = {
  title: 'Black-Owned In Your City',
};

export default Page;

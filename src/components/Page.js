/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Navigation from './Navigation';

const Page = ({ children }) => {
  const params = useParams();

  return (
    <>
      <Navigation {...params} />
      <Container disableGutters>{children}</Container>
      {/* TODO: footer */}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;

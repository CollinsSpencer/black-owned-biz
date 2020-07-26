import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Navigation } from '.';

export const Page = ({ children }) => {
  const params = useParams();

  return (
    <>
      <Navigation {...params} />
      <Container disableGutters>{children}</Container>
      {/* footer */}
    </>
  );
};

import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Box, Container, List, ListItem, makeStyles, Typography } from '@material-ui/core';

import { useGetBusinesses } from '../api';
import { BadRoutePage, DiscoveryPage, Loading } from '../components';
import { toKeyValue } from '../helpers/utils';
import { states } from '../helpers/constants';

const useStyles = makeStyles((theme) => ({
  letter: {
    color: theme.palette.secondary.light,
  },
}));

const State = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { data: businesses, isLoading, state } = useGetBusinesses();

  const cities = [...new Set(businesses?.map((r) => r.city))];

  const CitiesList =
    cities.length > 0 ? (
      <List>
        {'abcdefghijklmnopqrstuvwxyz'
          .split('')
          .filter((letter) => cities.some((city) => city.charAt(0).toLowerCase() === letter))
          .map((letter) => (
            <Box mt={4} key={letter}>
              <Typography variant="h2" className={classes.letter}>
                {letter.toUpperCase()}
                {letter}
              </Typography>
              {cities
                .filter((city) => city.charAt(0).toLowerCase() === letter)
                .map((city) => (
                  <ListItem key={city} button component={Link} to={`${url}/${toKeyValue(city)}`}>
                    <Typography variant="h3">{city}</Typography>
                  </ListItem>
                ))}
            </Box>
          ))}
      </List>
    ) : (
      <Typography variant="h3">
        No cities with Black-owned businesses in {state.display} have been added to the registry.
      </Typography>
    );

  return states.some((s) => s.name === state.display) ? (
    <DiscoveryPage heading={state.display} title={`Black-Owned In ${state.display}`}>
      <Container maxWidth="sm">{isLoading ? <Loading /> : CitiesList}</Container>
    </DiscoveryPage>
  ) : (
    <BadRoutePage heading={<>No state abbreviated &ldquo;{state.display}&rdquo; found here.</>} />
  );
};

export default State;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, Typography } from '@material-ui/core';

import { Page, UnitedStatesMap } from '../components';
import { states } from '../helpers/constants';

const Home = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const mapHandler = (event) => {
    const state = event.target.dataset.name;
    history.push(`${state}`);
  };

  const StateSelect = (
    <>
      <Button variant="outlined" aria-controls="state-menu" aria-haspopup="true" onClick={handleClick}>
        Select State
      </Button>
      <Menu id="state-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {states.map((state) => (
          <MenuItem key={state.abbreviation} onClick={() => history.push(`${state.abbreviation}`)}>
            {state.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <Page title="Black-Owned In America">
      <Box display="flex" justifyContent="center" my={12}>
        <Typography component="h1" variant="h2">
          Black-Owned In America
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" my="8">
        <Box m="4">
          <Typography variant="h4">Pick a state to start your search!</Typography>
        </Box>
        <Box mt="4">{StateSelect}</Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <UnitedStatesMap onClick={mapHandler} />
      </Box>
    </Page>
  );
};

export default Home;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { AuthActionsButton, AuthActionsListItem } from './AuthActions';
import { ContactButton, ContactListItem } from './Contact';
import { RouteBreadcrumbs, RouteBreadcrumbListItems } from './RouteBreadcrumbs';
// import { AddListingButton } from './AddListingButton';

const Navigation = ({ state, city, category }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar color="transparent" position="static" elevation={0}>
        <Toolbar>
          <Link component={RouterLink} to="/">
            <Typography variant="h5" noWrap>
              BlackOwned.in
            </Typography>
          </Link>
          <Hidden smDown>
            <Box ml={3}>
              <RouteBreadcrumbs state={state} city={city} category={category} />
            </Box>
          </Hidden>
          <Box flexGrow={1} />
          <Hidden smDown>
            <ContactButton />
            <AuthActionsButton />
            {/* <AddListingButton ml={3} /> */}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              aria-label="open drawer"
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClose={handleDrawerToggle}
          open={mobileOpen}
        >
          <Box width={240}>
            <List>
              <ListItem>
                <Typography variant="h6">BlackOwned.in</Typography>
              </ListItem>
              <Divider />
              <RouteBreadcrumbListItems
                state={state}
                city={city}
                category={category}
              />
              <Divider />
              <ContactListItem />
              <AuthActionsListItem />
              {/* <ListItem>
                <AddListingButton width={1} />
              </ListItem> */}
            </List>
          </Box>
        </Drawer>
      </Hidden>
    </>
  );
};

Navigation.propTypes = {
  state: PropTypes.string,
  city: PropTypes.string,
  category: PropTypes.string,
};
Navigation.defaultProps = {
  state: null,
  city: null,
  category: null,
};

export default Navigation;

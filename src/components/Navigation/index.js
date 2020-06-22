import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Hidden,
  Link,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  Divider,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthActionsButton, AuthActionsListItem } from './AuthActions';
import { ContactButton, ContactListItem } from './Contact';
import { RouteBreadcrumbs, RouteBreadcrumbListItems } from './RouteBreadcrumbs';
// import { AddListingButton } from './AddListingButton';

export const Navigation = ({ state, city, category }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar color='transparent' position='static' elevation={0}>
        <Toolbar>
          <Link component={RouterLink} to='/'>
            <Typography variant='h5' noWrap>
              BlackOwned.in
            </Typography>
          </Link>
          <Hidden smDown>
            <Box ml={3}>
              <RouteBreadcrumbs state={state} city={city} category={category} />
            </Box>
          </Hidden>
          <Box flexGrow={1}></Box>
          <Hidden smDown>
            <ContactButton />
            <AuthActionsButton />
            {/* <AddListingButton ml={3} /> */}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          anchor={'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box width={240}>
            <List>
              <ListItem>
                <Typography variant='h6'>BlackOwned.in</Typography>
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

import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ handleClickDrawerOpen }) => {
  const menuIconStyle = {
    marginRight: '15px',
    color: 'inherit',
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          style={menuIconStyle}
          aria-label="Open drawer"
          onClick={handleClickDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          style={{ flex: 1 }}
        >
          Exercise Database
        </Typography>

        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  handleClickDrawerOpen: PropTypes.func.isRequired,
};

export default Header;

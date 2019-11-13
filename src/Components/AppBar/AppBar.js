import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from './Tabs';
import Logo from '../../Assets/logo_white.png';

const styles = theme => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    width: '100vw',
    top: 0,
    zIndex: theme.zIndex.appBar,
    height: 75,
    backgroundColor: theme.palette.background.darkGrey,
  },
  logo: {
    height: '80%',
    width: 'auto',
  },
  menu: {
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

const StudioAppBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <img className={classes.logo} alt="Logo" src={Logo} />
      <Tabs anchorEl={anchorEl} close={handleClose} />
      <IconButton onClick={handleClick} className={classes.menu}>
        <MenuIcon className={classes.menu} />
      </IconButton>
    </AppBar>
  );
};

StudioAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(StudioAppBar));

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tabs, Tab, Menu, MenuItem } from '@material-ui/core';

const styles = theme => ({
  tabs: {
    padding: '0 30px',
    color: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  tab: {
    color: theme.typography.color,
    '& a': {
      color: theme.palette.primary,
    },
  },
});

const TabRouter = ({ classes, location, anchorEl, close }) => {
  const tabs = [
    {
      label: 'HOME',
      path: `/`,
    },
    {
      label: 'GALLERY',
      path: `/gallery`,
    },
    {
      label: 'CONTACT / RATES',
      path: `/contact`,
    },
    {
      label: 'ABOUT',
      path: `/about`,
    },
    {
      label: 'TESTIMONIALS',
      path: `/testimonials`,
    },
  ];
  return (
    <>
      <Tabs
        value={location.pathname}
        className={classes.tabs}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        {tabs.map(({ label, path, component }) => (
          <Tab
            key={label}
            value={path}
            label={label}
            className={classes.tab}
            component={Link}
            to={path}
          />
        ))}
      </Tabs>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={close}
      >
        {tabs.map(({ label, path, component }) => (
          <MenuItem
            key={label}
            component={Link}
            to={path}
            value={path}
            onClick={close}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

TabRouter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TabRouter));

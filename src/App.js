import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Theme from './theme';
import Routes from './routes/Router';
import 'typeface-roboto';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'hidden',
  },
  routeWrapper: {
    marginTop: 65,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      [theme.breakpoints.up('md')]: {
        width: '0.4em',
      },
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#9575cd',
      borderRadius: 5,
    },
  },
});

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Theme>
        <div className={classes.routeWrapper}>
          <Routes />
        </div>
      </Theme>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

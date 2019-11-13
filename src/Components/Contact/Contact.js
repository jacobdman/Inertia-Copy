import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    width: '80vw',
    marginTop: 50,
    marginBottom: 50,
    padding: 50,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      marginTop: 25,
      marginBottom: 25,
    },
  },
  text: {
    fontSize: 20,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  rateWrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      marginBottom: 45,
    },
  },
  rateRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  },
  divider: {
    height: 50,
    width: 1,
    backgroundColor: '#9b9b9b',
    [theme.breakpoints.down('md')]: {
      margin: '25px 0',
      width: 200,
      height: 1,
    },
  },
  verticalDivider: {
    height: 50,
    width: 1,
    backgroundColor: '#9b9b9b',
  },
  mapWrapper: {
    margin: '0 auto',
    height: 500,
    width: 700,
    [theme.breakpoints.down('sm')]: {
      height: 300,
      width: 250,
      marginBottom: 50,
    },
  },
  largeIframe: {
    height: 500,
    width: 700,
    border: `3px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  smallIframe: {
    height: 300,
    width: 250,
    marginBottom: 50,
    border: `2px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gmapCanvas: {
    overflow: 'hidden',
    background: 'none !important',
  },
  columnText: {
    width: '30%',
    fontSize: 20,
  },
  columnHeader: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      fontSize: 20,
    },
  },
});

const Contact = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <div className={classes.wrapper}>
        <Typography className={classes.text}>(801) 888-8888</Typography>
        <div className={classes.divider} />
        <Typography className={classes.text}>
          Info@InertiaClimbing.com
        </Typography>
        <div className={classes.divider} />
        <Typography className={classes.text}>
          Timpanogos Summit Trail (052), Provo, UT 84604
        </Typography>
      </div>
      <div className={classes.mapWrapper}>
        <div className={classes.gmapCanvas}>
          <iframe
            src="https://maps.google.com/maps?q=Timpanogos%20Summit%20Trail%20(052)%2C%20Provo%2C%20UT%2084604&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="map"
            className={classes.largeIframe}
          />
          <iframe
            src="https://maps.google.com/maps?q=Timpanogos%20Summit%20Trail%20(052)%2C%20Provo%2C%20UT%2084604&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="map"
            className={classes.smallIframe}
          />
        </div>
      </div>
      <h2>Rates</h2>
      <div className={classes.rateWrapper}>
        <Typography className={classes.columnHeader}>Individuals:</Typography>
        <div className={classes.divider} />
        <div className={classes.rateRow}>
          <Typography className={classes.columnText}>
            $150 / Full Day (10 hrs)
          </Typography>
          <div className={classes.verticalDivider} />
          <Typography className={classes.columnText}>
            $100 / Half Day (4 hrs)
          </Typography>
        </div>
      </div>
      <div className={classes.rateWrapper}>
        <Typography className={classes.columnHeader}>
          Small Group (4-7):
        </Typography>
        <div className={classes.divider} />
        <div className={classes.rateRow}>
          <Typography className={classes.columnText}>
            $450 / Full Day (10 hrs)
          </Typography>
          <div className={classes.verticalDivider} />
          <Typography className={classes.columnText}>
            $350 / Half Day (4 hrs)
          </Typography>
        </div>
      </div>
      <div className={classes.rateWrapper}>
        <Typography className={classes.columnHeader}>
          Large Group (8-12):
        </Typography>
        <div className={classes.divider} />
        <div className={classes.rateRow}>
          <Typography className={classes.columnText}>
            $900 / Full Day (10 hrs)
          </Typography>
          <div className={classes.verticalDivider} />
          <Typography className={classes.columnText}>
            $750 / Half Day (4 hrs)
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Contact));

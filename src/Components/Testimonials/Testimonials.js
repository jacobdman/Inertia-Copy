import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Paper, Button } from '@material-ui/core';
import Review_Header from '../../Assets/Reviews/Review_Header.png';
import Review1 from '../../Assets/Reviews/review1.png';
import Review2 from '../../Assets/Reviews/review2.png';
import Review3 from '../../Assets/Reviews/review3.png';
import Review4 from '../../Assets/Reviews/review4.png';
import Review5 from '../../Assets/Reviews/review5.png';

const styles = theme => ({
  root: {
    width: '80vw',
    marginBottom: 50,
    padding: '30px 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      marginTop: 25,
      marginBottom: 25,
      padding: 20,
    },
  },
  paper: {
    width: '100%',
    margin: '20px 0',
    padding: '20px 15px',
    [theme.breakpoints.down('md')]: {
      margin: '10px 0',
    },
  },
  header: {
    width: '100%',
    margin: '20px 0',
    padding: '20px 15px',
    [theme.breakpoints.down('md')]: {
      marginBottom: 40,
    },
  },
  review: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  button: {
    ...theme.buttonAlt,
    width: '40%',
    margin: '20px 0',
  },
});

const Testimonials = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Paper className={classes.header}>
        <img src={Review_Header} alt="header" />
      </Paper>
      <Paper className={classes.paper}>
        <img src={Review1} alt="review" className={classes.review} />
      </Paper>
      <Paper className={classes.paper}>
        <img src={Review2} alt="review" className={classes.review} />
      </Paper>
      <Paper className={classes.paper}>
        <img src={Review3} alt="review" className={classes.review} />
      </Paper>
      <Paper className={classes.paper}>
        <img src={Review4} alt="review" className={classes.review} />
      </Paper>
      <Paper className={classes.paper}>
        <img src={Review5} alt="review" className={classes.review} />
      </Paper>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        component="a"
        target="_blank"
        href={
          'https://www.google.com/search?q=mt+timpanogos&rlz=1C5CHFA_enUS788US790&oq=mt+tim&aqs=chrome.1.69i57j0l5.1844j0j7&sourceid=chrome&ie=UTF-8#lrd=0x874d8f4bb6df254d:0x98c1452b34f97c3f,1,,,'
        }
      >
        ... More
      </Button>
    </div>
  );
};

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Testimonials));

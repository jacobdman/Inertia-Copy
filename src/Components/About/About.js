import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Img from '../../Assets/four.jpg';

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
    fontSize: 18,
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    ...theme.button,
    margin: 15,
    marginTop: 30,
  },
  image: {
    width: '40%',
    float: 'right',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      float: 'none',
    },
  },
});

const About = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <h2>About Us</h2>
      {/* <img className={classes.image} alt="climbing" src={Img} /> */}
      <Typography className={classes.text}>
        Vestibulum fermentum dignissim massa vitae dignissim. Etiam elit dui,
        tincidunt vitae congue et, fermentum quis risus. Suspendisse
        pellentesque metus placerat molestie faucibus. Curabitur convallis
        blandit orci, ut blandit nunc molestie in. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Nam blandit
        velit ut metus tincidunt, ac sodales dolor condimentum. Aenean lacinia
        suscipit metus. Mauris vel fermentum tortor, non luctus tellus.
        <br />
        <br />
      </Typography>
      <img className={classes.image} alt="climbing" src={Img} />
      <Typography className={classes.text}>
        Cras purus arcu, pharetra non turpis eget, bibendum ornare tortor. Nunc
        quis leo euismod, pharetra odio in, suscipit felis. Cras ut elit ac diam
        iaculis tempor. Sed porttitor sem in ex lacinia auctor. Quisque vitae
        ipsum a odio tempus aliquet non a neque. Cras varius fermentum nunc sit
        amet vulputate. Etiam sollicitudin sit amet lacus at rutrum. Proin
        eleifend, augue a pharetra lacinia, sem purus fermentum leo, a luctus
        tortor erat ut orci. Ut efficitur ornare congue.
        <br />
        <br />
        Nam vel magna ante. Mauris viverra lorem luctus mi lobortis, sit amet
        convallis massa finibus. Nam aliquam, est sed mollis commodo, lectus
        urna tincidunt justo, vel sollicitudin odio odio vehicula augue.
        Suspendisse in posuere risus. Nunc congue iaculis ligula, et volutpat
        erat rhoncus vel. Phasellus fermentum lorem justo. Sed vel elit eget
        orci vulputate condimentum eget non quam.
      </Typography>
    </Paper>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(About));

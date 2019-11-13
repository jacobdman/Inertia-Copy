import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClimbingImg from '../../Assets/six.jpg';

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
    [theme.breakpoints.down('md')]: {
      margin: '30px 5px',
    },
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto',
    width: '100%',
  },
});

const Home = ({ classes }) => {
  const handleClick = page => {
    this.props.history.push(`/${page}`);
  };

  return (
    <Paper className={classes.paper}>
      <h2>Inertia Mountain Climbing</h2>
      <Typography className={classes.text}>
        ​Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
        metus odio. Sed orci turpis, iaculis ut aliquet id, commodo ut erat.
        Donec tempor ligula est, eu tincidunt orci scelerisque nec. Sed gravida
        interdum mi ac iaculis. Aenean eget rutrum sem, vestibulum viverra nisi.
        Donec facilisis molestie velit, quis tristique metus placerat et.
        Vivamus ut dui laoreet, laoreet ipsum id, mollis nibh. Vivamus vitae
        lacus nibh. Nullam rutrum massa nec ullamcorper sollicitudin.
        Pellentesque ultrices leo et pellentesque venenatis. Proin diam nisi,
        auctor ut metus a, mollis pulvinar tortor. Maecenas purus tellus, cursus
        vitae semper at, cursus eu urna. Quisque id neque id dolor molestie
        scelerisque. Aliquam at tristique nisi. Morbi varius dapibus enim, eget
        accumsan sapien lacinia non. Nullam a cursus tellus.
        <br />
        <br />
        Pellentesque hendrerit justo nisi, id consectetur magna fringilla
        placerat. Phasellus ut tellus diam. Ut dapibus urna eu tempus maximus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Sed consectetur consequat lacinia. Suspendisse cursus
        nisl nec dui tempus sollicitudin. Duis eleifend egestas faucibus. Fusce
        venenatis felis in dignissim placerat. Donec tortor sapien, elementum et
        neque vel, feugiat posuere nunc. Maecenas accumsan felis eu convallis
        euismod. Praesent rutrum euismod scelerisque. Donec magna nisi, gravida
        a scelerisque at, feugiat ac urna. Morbi cursus pulvinar eros, vitae
        blandit odio auctor at.
        <br />
        <br />
        <img src={ClimbingImg} className={classes.image} alt="climbing" />
        <br />
        <br />
        Sed lobortis magna in enim lacinia elementum. Maecenas in nibh tortor.
        Nullam vitae ultricies enim. Praesent gravida dolor et nibh blandit
        semper. Sed posuere facilisis nulla. Nunc eget tortor a nunc finibus
        lobortis. Curabitur at felis at purus hendrerit suscipit ac eget est.
        <br />
        <br />
        Vivamus maximus nisl et blandit vulputate. Vestibulum dignissim justo
        eget diam euismod suscipit. Suspendisse facilisis nec velit nec blandit.
        Cras dui risus, vehicula sed nisi vitae, sagittis elementum nulla. Donec
        quis lorem congue, rhoncus neque eget, rutrum lacus. Suspendisse massa
        dui, fringilla ac gravida non, elementum nec tortor. Vestibulum congue
        semper nunc sed condimentum. Proin placerat ligula eu lorem congue
        vulputate. Donec dapibus sapien viverra mauris scelerisque, non euismod
        turpis ullamcorper. Sed massa enim, efficitur ac nunc a, volutpat
        vehicula libero. Nulla ultrices ultricies urna ut posuere. Aliquam
        congue purus a magna ultricies, ac bibendum leo lobortis. Morbi commodo
        non quam a pellentesque.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => handleClick('contact')}
      >
        Contact
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => handleClick('gallery')}
      >
        Full Gallery
      </Button>
    </Paper>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));

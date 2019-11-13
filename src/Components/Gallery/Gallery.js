import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import img from '../../Assets/eight.jpg';
import img2 from '../../Assets/two.jpg';
import img3 from '../../Assets/three.jpg';
import img4 from '../../Assets/four.jpg';
import img5 from '../../Assets/six.jpg';
import img6 from '../../Assets/one.jpg';
import img7 from '../../Assets/seven.png';
import img8 from '../../Assets/five.jpg';

const styles = theme => ({
  root: {
    marginTop: 45,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-around',
    width: '99vw',
  },
  paper: {
    width: '70%',
    padding: 25,
    paddingRight: 10,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobilePaper: {
    width: '90%',
    padding: 5,
    paddingRight: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gridList: {
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  frame: {
    border: '5px solid #5e0e29',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
});

const tileData = [
  {
    img: img,
    cols: 1.5,
  },
  {
    img: img2,
    cols: 2.5,
  },
  {
    img: img3,
    cols: 2.3,
  },
  {
    img: img4,
    cols: 1.7,
  },
  {
    img: img5,
    cols: 2.5,
  },
  {
    img: img6,
    cols: 1.5,
  },
  {
    img: img7,
    cols: 3,
  },
  {
    img: img8,
    cols: 1,
  },
];

const mobileTileData = [
  {
    img: img,
    cols: 2,
  },
  {
    img: img8,
    cols: 2,
  },
  {
    img: img2,
    cols: 4,
  },
  {
    img: img3,
    cols: 4,
  },
  {
    img: img4,
    cols: 4,
  },
  {
    img: img5,
    cols: 4,
  },
  {
    img: img6,
    cols: 4,
  },
  {
    img: img7,
    cols: 4,
  },
];

const Gallery = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [tile, setTile] = useState(false);

  const openImageDialog = tile => {
    setOpen(true);
    setTile(tile);
  };

  const close = () => {
    setOpen(false);
    setTile(false);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <GridList
          cellHeight={400}
          spacing={15}
          className={classes.gridList}
          cols={4}
        >
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              onClick={() => openImageDialog(tile)}
            >
              <div
                className={classes.frame}
                style={{
                  backgroundImage: `url(${tile.img})`,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
      <Paper className={classes.mobilePaper}>
        <GridList cellHeight={200} className={classes.gridList} cols={4}>
          {mobileTileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              onClick={() => openImageDialog(tile)}
            >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
      {open && <Lightbox mainSrc={tile.img} onCloseRequest={close} />}
    </div>
  );
};

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery);

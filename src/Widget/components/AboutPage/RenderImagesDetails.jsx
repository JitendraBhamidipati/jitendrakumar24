import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Normal from '__SHARED__/Fonts/Normal';
import Rating from '__SHARED__/Rating';

const styles = makeStyles(theme => ({
  compositionWrap: {
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      padding: disablePadding => (disablePadding ? 0 : '2rem')
    }
  },
  composition: {
    position: 'relative',
    minHeight: '30rem',
    [theme.breakpoints.between('sm', 'md')]: {
      minHeight: '25rem'
    },
    [theme.breakpoints.up('md')]: {
      top: '12.5%',
      left: 40
    },
    [theme.breakpoints.only('xs')]: {
      minHeight: '20rem'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '35rem'
    },
    '& img': {
      width: '40%',
      boxShadow: `0 1.5rem 4rem ${theme.colors.black5}`,
      borderRadius: 2,
      position: 'absolute',
      outlineOffset: '1.5rem',
      [theme.breakpoints.down('sm')]: {
        float: 'left',
        position: 'relative',
        width: '33.3333333%',
        boxShadow: `0 1.5rem 3rem ${theme.colors.black2}`
      },
      '&:hover': {
        transform: 'scale(1.05) translateY(-0.5rem)',
        boxShadow: `0 2.5rem 4rem ${theme.colors.black5}`,
        zIndex: 99990,
        outline: `1.5rem solid ${theme.colors.mainAction}`
      },
      '&:hover &__photo:not(:hover)': {
        transform: 'scale(0.95)'
      }
    }
  },
  compositionImage1: {
    left: '4rem',
    top: '-2rem',
    zIndex: 5,
    [theme.breakpoints.down('md')]: {
      top: '3rem',
      left: '5rem'
    }
  },
  compositionImage2: {
    right: '15rem',
    top: '1rem',
    zIndex: 5,
    [theme.breakpoints.down('md')]: {
      top: '5rem',
      right: '8rem'
    },
    [theme.breakpoints.down('sm')]: {
      top: '5rem',
      right: 0,
      zIndex: 10
    }
  },
  compositionImage3: {
    left: '20%',
    top: '7rem',
    zIndex: 5,
    [theme.breakpoints.down('md')]: {
      top: '10rem',
      left: '10rem'
    },
    [theme.breakpoints.down('sm')]: {
      top: '3rem',
      left: '-5rem'
    }
  },
  content: {
    textAlign: 'justify'
  },
  ratings: {
    margin: '2rem 0'
  },
  ratingText: {
    textAlign: 'center'
  },
  tripTitle: {
    color: theme.colors.heading,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    fontStyle: 'italic',
    marginBottom: '2rem'
  },
  placesCovered: {
    marginTop: '2rem',
    fontStyle: 'italic',
    color: theme.colors.primary
  }
}));

export const renderDetails = (item, isOffice = false) => {
  const classes = styles();
  const ratings = [
    { displayText: 'Work life balance', key: 'workLifeBalance' },
    { displayText: 'Ambience', key: 'ambience' },
    { displayText: 'Work satisfaction', key: 'workSatisfaction' },
    { displayText: 'Recommend for friend', key: 'recommendForFriend' }
  ];
  return (
    <Grid item md={6} xs={12}>
      <Grid>
        <Typography className={classes.tripTitle} variant="h6" component="h3">
          {isOffice ? item.title : `Trip ${item.id}:-`}
        </Typography>
      </Grid>
      <Normal className={classes.content}>&emsp; {item.content}</Normal>
      {!isOffice && (
        <Normal className={classes.placesCovered}>
          Places Covered: {item.placesCovered}
        </Normal>
      )}
      <Grid container className={classes.ratings} spacing={2}>
        {isOffice &&
          ratings.map((rating, index) => (
            <Grid
              item
              xs={6}
              className={classes.ratingText}
              key={rating.displayText}
            >
              <Grid>{rating.displayText}</Grid>
              <Rating
                precision={0.5}
                name={rating.displayText + index}
                value={item[rating.key]}
                readOnly
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export const renderImages = (item, disablePadding) => {
  const classes = styles(disablePadding);
  return (
    <Grid className={classes.compositionWrap} item md={6} xs={12}>
      <Grid className={classes.composition}>
        <img
          alt="image_1"
          className={classes.compositionImage1}
          src={item.image1}
        />
        <img
          alt="image_2"
          className={classes.compositionImage2}
          src={item.image2}
        />
        <img
          alt="image_3"
          className={classes.compositionImage3}
          src={item.image3}
        />
      </Grid>
    </Grid>
  );
};

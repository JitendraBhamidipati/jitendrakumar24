import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Normal from '__SHARED__/Fonts/Normal';
import Link from '__SHARED__/Link';
import contactImg from '__ASSETS__/Images/contact';
import { PhoneIcon, MailIcon, LocationIcon, WebIcon } from '__ASSETS__/SVG';
import ContactForm from './ContactForm';

const styles = makeStyles(theme => ({
  contact: {
    background: `linear-gradient(to right, ${theme.colors.black5},${theme.colors.black5}),url(${contactImg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    padding: '7rem',
    paddingTop: '10rem',
    backgroundBlendMode: 'soft-light',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      paddingTop: '8rem',
      padding: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8rem',
      padding: '1.5rem'
    }
  },
  personalInfoWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  info: {
    backgroundColor: theme.colors.contact,
    padding: '4rem',
    color: theme.colors.white,
    [theme.breakpoints.between('xs', 'md')]: {
      marginTop: '1rem',
      marginBottom: '1rem',
      padding: '2.5rem'
    }
  },
  header: {
    color: theme.colors.mainAction,
    marginBottom: '2.5rem',
    fontSize: '2rem',
    textTransform: 'uppercase'
  },
  marginBottom: {
    marginBottom: 'auto'
  },
  marginTop: {
    marginTop: 'auto'
  },
  normal: {
    color: theme.colors.white
  }
}));

const Contact = props => {
  const { sendMail, submitLoader } = props;
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const saveValues = values => {
    submitLoader();
    sendMail(values);
  };

  return (
    <Grid container className={classes.contact}>
      <Grid item sm={5} xs={12} className={classes.info}>
        <ContactForm onSubmit={saveValues} />
      </Grid>
      <Grid item sm={5} xs={12} className={classes.personalInfoWrap}>
        <Grid className={classNames(classes.info, classes.marginBottom)}>
          <Typography className={classes.header} component="h3">
            Address
          </Typography>
          <Link
            href="https://maps.google.com/?q=Padmavathi Function Hall,Gollapudi"
            target="_blank"
            rel="noreferrer"
          >
            <LocationIcon />
            <Normal className={classes.normal}>
              Plot No:69 Iron Merchant,SSS Colony,Near Padmavathi Function Hall,
              Gollapudi, Vijayawada, Andhra Pradesh, India. 521225
            </Normal>
          </Link>
        </Grid>
        <Grid className={classes.info}>
          <Typography className={classes.header} component="h3">
            Phone
          </Typography>
          <Link href="tel:+91 949-196-4870">
            <PhoneIcon />
            <Normal className={classes.normal}>+91 949 196 4870</Normal>
          </Link>
          <Link href="tel:+91 949-196-4870">
            <PhoneIcon />
            <Normal className={classes.normal}>+91 798 938 1360</Normal>
          </Link>
        </Grid>
        <Grid className={classNames(classes.marginTop, classes.info)}>
          <Typography className={classes.header} component="h3">
            Web
          </Typography>
          <Link href="mailto:jeetu241295@gmail.com">
            <MailIcon />
            <Normal className={classes.normal}>jeetu241295@gmail.com</Normal>
          </Link>
          <Link href="/">
            <WebIcon />
            <Normal className={classes.normal}>www.jitendrakumar24.tech</Normal>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {
  sendMail: PropTypes.func.isRequired,
  submitLoader: PropTypes.func.isRequired
};
export default Contact;

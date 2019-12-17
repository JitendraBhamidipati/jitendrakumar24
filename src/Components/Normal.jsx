import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  normal: {
    color: theme.colors.calenderColor,
    fontSize: '1.5rem'
  }
}));

const Normal = props => {
  const { children, className } = props;
  const classes = styles();
  return (
    <Grid className={classNames(classes.normal, className)}>{children}</Grid>
  );
};

Normal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Normal.defaultProps = {
  className: ''
};

export default Normal;

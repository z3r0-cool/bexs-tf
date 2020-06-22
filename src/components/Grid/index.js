import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

function SimpleGrid (props) {
  const { container, xs, sm, children, spacing } = props;
  return (
    <>
    {
      container
      ? (
        <Grid container spacing = { spacing }> { children }</Grid >
      ) : (
        <Grid xs={xs} item sm={sm}> {children}</Grid >
      )
    }
    </>
  
  );
}

export default SimpleGrid;

SimpleGrid.propTypes = {
  children: PropTypes.node,
  container: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  spacing: PropTypes.number,
};

SimpleGrid.defaultProps = {
  children: '',
  container: false,
  xs: 12,
  sm: 12,
  spacing: 3,
};
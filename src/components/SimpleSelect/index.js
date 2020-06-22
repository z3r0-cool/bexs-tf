import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../utils/constants/Colors';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  label: {
    color: `${Colors.primaryGray} !important`,
  },
  formControl: {
    width: '100%',
  },
  select: {
    width: '100%',
    '&:before': {
      borderColor: Colors.primaryGray,
    },
    '&:after': {
      borderColor: Colors.primaryGray,
    },
    '& .MuiInput-underline:after': {
      borderColor: `${Colors.primaryGray}`
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderColor: `${Colors.errorColors}`
    },
  },
  error: {
    color: Colors.errorColors,
  }
}));

function SimpleSelect(props) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const { options, changeValue, label, errorMessage } = props;
  useEffect(() => {
    changeValue(value);
  }, [changeValue, value]);
  return (
    <FormControl className={classes.formControl}>
    <InputLabel className={classes.label}>{label}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      className={classes.select}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      error={!!errorMessage}
    >
      {
        options.map((item) => {
          return (<MenuItem value={item.id} key={item.id}>{item.value}</MenuItem>)
        })
      }
    </Select>
    {
      !!errorMessage && (<FormHelperText className={classes.error}>{errorMessage}</FormHelperText>)
    }
    </FormControl>
  );
}

export default SimpleSelect;

SimpleSelect.propTypes = {
  options: PropTypes.array,
  changeValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

SimpleSelect.defaultProps = {
  label: 'Select',
  options: [{
    id: 1,
    value: 'Valor 1',
  }],
  errorMessage: '',
};
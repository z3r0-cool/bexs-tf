import React from 'react';
import Colors from '../../utils/constants/Colors';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import InputMask from "react-input-mask";

import {
  withStyles,
} from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    width: '100%',
    '& label.Mui-focused': {
      color: `${Colors.primaryGray}`,
    },
    '& .MuiInput-underline:after': {
      borderColor: `${Colors.primaryGray}`
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderColor: `${Colors.errorColors}`
    },
    '& .MuiFormLabel-root': {
      color: `${Colors.primaryGray}`,
    },
    '& .MuiInput-underline:before': {
      borderColor: `${Colors.primaryGray} `,
    },
    '& .Mui-focused': {
      borderColor: `${Colors.primaryGray}`,
    },
  },
})(TextField);

function SimpleInput(props) {
  const { label, changeValue, mask, onFocus, id, errorMessage } = props;

  return (
    <>
    {
      !!mask
      ? (
            <InputMask
              mask={mask ? mask : false}
              onChange={(event) => changeValue(event.target.value)}
              onFocus={() => onFocus(id)}
              maskChar={null}
            >
              {() => <CssTextField error={!!errorMessage} helperText={errorMessage} label={label} />}
            </InputMask>
      ) : (
            < CssTextField error={!!errorMessage} helperText={errorMessage} label={label} onChange={(event) => changeValue(event.target.value)} onFocus={() => onFocus(id)}  />
      )
  }
    </>
  );
}

export default SimpleInput;

SimpleInput.propTypes = {
  label: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
  mask: PropTypes.string,
  onFocus: PropTypes.func,
  id: PropTypes.any,
  errorMessage: PropTypes.string,
};

SimpleInput.defaultProps = {
  label: 'InputLabel',
  onFocus: () => {},
  errorMessage: '',
};
import React, { memo } from 'react';
import { TextField, FormControl, InputAdornment } from '@material-ui/core';
import useStyles from './styles';
import clsx from 'clsx';
import Images from 'config/images'

interface InputSearchProps {
  type?: string,
  title?: string,
  placeholder?: string,
  name?: string,
  defaultValue?: string,
  value?: string,
  disabled?: boolean,
  className?: any,
  inputRef?: any,
  onChange?: any,
  autoComplete?: string,
}
const InputSearch = memo(React.forwardRef((props: InputSearchProps, ref) => {
  const classes = useStyles();
  const {
    type,
    placeholder,
    name,
    defaultValue,
    value,
    disabled,
    className,
    inputRef,
    autoComplete,
    ...rest
  } = props;

  const { ref: refInput, ...inputProps } = inputRef || { ref: null }

  return (
    <FormControl fullWidth>
      <TextField
        type='text'
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        value={value}
        fullWidth
        classes={{ root: classes.rootTextField }}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: clsx(classes.inputTextfield),
          },
          autoComplete,
          endAdornment: (
            <InputAdornment position="end">
              <img src={Images.icMagnifyingGlass} alt="eye-close" />
            </InputAdornment>
          )
        }}
        {...inputProps}
        inputRef={refInput}
        {...rest}
      />
    </FormControl>
  );
}));
export default InputSearch;




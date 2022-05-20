import { FormControl, InputAdornment, TextField } from '@material-ui/core';
import clsx from 'clsx';
import Images from 'config/images';
import React from 'react';
import useStyles from './styles';

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
  search?: boolean,
}
const InputSearch = React.forwardRef((props: InputSearchProps, ref) => {
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
    search,
    ...rest
  } = props;

  const { ref: refInput, ...inputProps } = inputRef || { ref: null }

  return (
    <FormControl fullWidth classes={{ root: classes.container }}>
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
          startAdornment: (
            search && <InputAdornment position="start">
              <img src={Images.icSearchGray} alt="eye-close" />
            </InputAdornment>
          )
        }}
        {...inputProps}
        inputRef={refInput}
        {...rest}
      />
    </FormControl>
  );
});
export default InputSearch;




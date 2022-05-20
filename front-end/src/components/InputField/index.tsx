import { FormControl, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

interface InputFieldProps {
  defaultValue?: string,
  placeholder?: string,
  name: string,
  value?: string,
  className?: any,
  inputRef?: any,
  onChange?: any,
  multiline?: boolean
}
const InputField = React.forwardRef((props: InputFieldProps, ref) => {
  const classes = useStyles();
  const {
    defaultValue,
    placeholder,
    name,
    value,
    className,
    inputRef,
    multiline,
    ...rest
  } = props;

  const { ref: refInput, ...inputProps } = inputRef || { ref: null }

  return (
    <FormControl fullWidth>
      <TextField
        className={clsx(classes.input, { [className]: className })}
        placeholder={placeholder}
        name={name}
        value={value}
        multiline={multiline}
        defaultValue={defaultValue}
        fullWidth
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.inputTextfield,
          },
        }}
        {...inputProps}
        inputRef={refInput}
        {...rest}
      />
    </FormControl>
  );
});
export default InputField;




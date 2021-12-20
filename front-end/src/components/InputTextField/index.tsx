import React, { memo } from 'react';
import { TextField, Typography, FormControl, InputAdornment } from '@material-ui/core';
// import { Visibility } from '@material-ui/icons/';
import Images from 'config/images';
import useStyles from './styles';
import clsx from 'clsx';

interface InputsProps {
  title?: string,
  isEdit?: boolean,
  showIcon?: boolean,
  placeholder?: string,
  name: string,
  img?: string,
  readOnly?: boolean,
  className?: any,
  inputRef?: any,
  onChange?: any,
  autoComplete?: string,
  multiline?: boolean
}
const Inputs = memo(React.forwardRef((props: InputsProps, ref) => {
  const classes = useStyles();
  const { 
    title,
    isEdit,
    showIcon,
    placeholder,
    name,
    img,
    readOnly,
    className,
    inputRef,
    onChange,
    autoComplete,
    multiline,
    ...rest
  } = props;


  const { ref: refInput, ...inputProps } = inputRef || { ref: null }

  return (
    <FormControl fullWidth classes={{ root: classes.container }}>
      {
        title && (<Typography className={classes.textTitle} classes={{ root: classes.textTitle }}>{title}</Typography>)
      }
      <TextField
        className={className}
        placeholder={placeholder}
        name={name}
        multiline={multiline}
        fullWidth
        classes={{
          root: clsx(classes.rootTextField, {
            [classes.inputDisable]: readOnly,
          })
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: clsx(classes.inputTextfield),
          },
          readOnly: readOnly,
          autoComplete,
          startAdornment: (
            showIcon && <InputAdornment position="start">
              <img src={img} alt="" />
            </InputAdornment>
          ),
          endAdornment: (
            isEdit && <InputAdornment position="end">
                <img src={Images.icPencilLine} alt="eye-close" />
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
export default Inputs;




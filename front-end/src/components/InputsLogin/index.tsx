import React, { useState, memo } from 'react';
import { TextField, Typography, FormControl, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility } from '@material-ui/icons/';
import Images from 'config/images';
import useStyles from './styles';
import clsx from 'clsx';

interface InputsLoginProps {
  title?: string,
  isEdit?: boolean,
  placeholder?: string,
  name: string,
  type?: string,
  defaultValue?: string,
  value?: string,
  showEyes?: boolean,
  showIcon?: boolean,
  img?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  readOnly?: boolean,
  className?: any,
  inputRef?: any,
  onChange?: any,
  autoComplete?: string,
  errorMessage?: string | null,
  multiline?: boolean,
  endIcon?: string,
  rows?: number,
  onEndIconClick?: () => void
}
const InputsLogin = memo((props: InputsLoginProps) => {
  const classes = useStyles();
  const [toggleEyes, setToggleEyes] = useState(false);
  const { title,
    placeholder,
    isEdit,
    name,
    defaultValue,
    value,
    type,
    disabled,
    readOnly,
    className,
    showEyes,
    showIcon,
    img,
    inputRef,
    errorMessage,
    autoComplete,
    multiline,
    endIcon,
    rows,
    fullWidth = true,
    onEndIconClick,
    ...rest
  } = props;

  const handleClick = () => {
    setToggleEyes(!toggleEyes);
  }

  const { ref: refInput, ...inputProps } = inputRef || { ref: null }

  return (
    <FormControl fullWidth={fullWidth} classes={{ root: classes.container }}>
      {
        title && (<Typography className={classes.textTitle} classes={{ root: classes.textTitle }}>{title}</Typography>)
      }
      <TextField
        type={!toggleEyes ? type : 'text'}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        value={value}
        multiline={multiline}
        rows={rows}
        fullWidth={fullWidth}
        classes={{
          root: clsx(classes.rootTextField, {
            [classes.inputDisable]: readOnly,
            [classes.inputInvalid]: errorMessage
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
            showEyes ? <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}>
                {!toggleEyes ? <img src={Images.icEyeClose} alt="eye-close" /> : <Visibility />}
              </IconButton>
            </InputAdornment>
              : isEdit ? <InputAdornment position="end">
                <img src={Images.icPencilLine} alt="eye-close" />
              </InputAdornment>
                : endIcon && <InputAdornment position="end" >
                  <IconButton onClick={onEndIconClick}>
                    <img src={endIcon} alt="" />
                  </IconButton>
                </InputAdornment>
          )
        }}
        {...inputProps}
        inputRef={refInput}
        {...rest}
      />
      {errorMessage && <Typography classes={{ root: classes.textError }}>{errorMessage}</Typography>}
    </FormControl>
  );
});
export default InputsLogin;




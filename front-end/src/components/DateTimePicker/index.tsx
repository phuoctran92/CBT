import React, { memo } from 'react';
import { Typography, FormControl } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Images from 'config/images';
import useStyles from './styles';
import clsx from 'clsx';

interface InputsProps {
  title: string,
  placeholder: string,
  className?: any,
  register?: any,
  onChange?: any,
  value?: Date | null,
  autoComplete?: string,
  errorMessage?: string | null,
  onBlur: any,
  maxDate?: Date
}
const DateTimePicker = memo(React.forwardRef((props: InputsProps, ref) => {
  const { title, errorMessage, placeholder, register, onBlur, ...rest} = props;
  const classes = useStyles();
  
  const handleDateBlur  = (e) => { 
    onBlur && onBlur(e)
  }
  const { ref: refInput, ...inputProps } = register || {ref: null}

  return (
    <FormControl fullWidth classes={{ root: classes.container }}>
      <Typography className={classes.textTitle} classes={{ root: classes.textTitle }}>{title}</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          format="dd/MM/yyyy"
          name="DOB"
          placeholder={placeholder}
          className={classes.datePicker}
          classes={{ root: clsx(!errorMessage ? []: [classes.inputInvalid]) }}
          KeyboardButtonProps={{'aria-label': 'change date' }}
          keyboardIcon={<img src={Images.icDate} alt="" />}
          InputProps={{
            disableUnderline: true,
            classes: {
              input: clsx(classes.inputdatePicker),
            },
          }}
          {...inputProps}
          inputRef={refInput}
          {...rest}
          onBlur={handleDateBlur}
        />
      </MuiPickersUtilsProvider>
      { errorMessage && <Typography classes={{ root: classes.textError }}>{ errorMessage }</Typography>}
    </FormControl>
  );
}));
export default DateTimePicker;

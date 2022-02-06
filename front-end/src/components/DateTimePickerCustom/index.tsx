import DateFnsUtils from "@date-io/date-fns";
import { Grid, Typography } from "@material-ui/core";
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Images from 'config/images';
import React, { memo, useState } from "react";
import useStyles from './styles';
interface DatePickerProps {
  label: string,
  name: string,
}

const DateTimePickerCustom = memo(React.forwardRef((props: DatePickerProps, ref) => {
  const { label, name, } = props
  const [date, setDate] = useState<Date | null>(new Date());
  const classes = useStyles()

  const KeyBoardIcon = (props) => (
    <img src={Images.CBTicCalendar} alt="" {...props} />
  )

  return (
    <Grid className={classes.container}>
      <Typography>{label}</Typography>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <KeyboardDateTimePicker
          minDateMessage=""
          disablePast
          //disableToolbar
          format="yyyy/MM/dd HH:mm"
          value={date}
          className={classes.datePicker}
          onChange={(date) => {
            setDate(date);
          }}
          KeyboardButtonProps={{ 'aria-label': 'change date' }}
          keyboardIcon={<KeyBoardIcon />}
          InputProps={{
            readOnly: true,
            disableUnderline: true,
            classes: {
              input: classes.inputDatePicker,
            },
          }}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
}));

export default DateTimePickerCustom;

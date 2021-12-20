import { Typography } from "@material-ui/core";
import React, { memo } from "react";
import { CustomStyle, useStyles } from "./styles";
interface SliderCustomProps {
  min?: number;
  max?: number;
  className?: any;
  title?: string;
  defaultValue?: number;
  value?: number;
  onChange?: (e?: any) => void;
}

const SliderCustom = memo((props: SliderCustomProps) => {

  const classes = useStyles();

  const { min, max, title, className, defaultValue, onChange, value } = props;

  const handleChange = (event, newValue) => {
    onChange && onChange(newValue)
  }

  const marks = [
    {
      value: min ? min : 0,
      label: min ? String(min) : '0',
    },
    {
      value: max ? max : 100,
      label: max ? String(max) : '100',
    },
  ];

  return (
    <>
      <Typography
        gutterBottom
        className={classes.header}
      >
        {title}
      </Typography>
      <CustomStyle
        className={className ? className : ""}
        valueLabelDisplay="auto"
        defaultValue={defaultValue ? defaultValue : 0}
        value={value || 0}
        aria-label="slider"
        min={min ? min : 0}
        max={max ? max : 100}
        marks={marks}
        track={false}
        onChange={handleChange}
      />
    </>
  );
});
export default SliderCustom;

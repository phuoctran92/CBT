import { Slider } from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { styled } from "@material-ui/styles";
import theme from "config/theme";

export const CustomStyle = styled(Slider)({
  color: theme.mangoColor,
  height: 8,
  '& .MuiSlider-rail': {
    height: 8,
    opacity: 1,
    borderRadius: 4,
    background: '#bdbdbd',
  },
  '& .MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-track': {
    border: 'none',
    display: 'unset',
    height: 8,
    borderRadius: 4,
    background: theme.mangoColor,
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    marginTop: '-4px',
    backgroundColor: theme.mangoColor,
    border: `3px solid ${theme.subColor}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 14,
    fontWeight: 800,
    '& > *': {
      width: 'auto',
      padding: '0px 5px',
      transform: 'translate(0%, 200%)',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px 1px #999',
      backgroundColor: theme.bg,
      '& > *': {
        padding: '0px 5px',
        transform: 'none',
        color: theme.subColor,
      }
    },
  },

  '& .MuiSlider-markLabel': {
    fontSize: '14px',
    fontWeight: 800,
    top: '30px',
    color: theme.subColor,
  },

  '& .MuiSlider-markLabelActive': {
    color: theme.subColor,
  },

});

//export default CustomStyle;

export const useStyles = makeStyles(() =>
  createStyles({
    header: {
      fontSize: '18px',
      fontWeight: 800,
      color: theme.subColor,
    },
  })
);
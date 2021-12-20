import useStyles from "./styles";
import { Grid, CircularProgress, CircularProgressProps } from "@material-ui/core";
import theme from 'config/theme';

interface LinearProgressDonutProps {
  value: number;
}
const LinearProgressDonut = (props: CircularProgressProps & LinearProgressDonutProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <CircularProgress
        style={{
          color: theme.subColor,
          position: 'absolute',
          top: '3px',
          left: '3px',
        }}
        thickness={2}
        size={64}
        value={100}
        variant="determinate"
      />
      <CircularProgress
        thickness={6}
        size={70}
        //disableShrink
        variant="determinate"
        {...props}
      />
      <Grid className={classes.text}>
        <span>{`${Math.round(props.value)}%`}</span>
      </Grid>
    </Grid>
  );
};

export default LinearProgressDonut;

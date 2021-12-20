import useStyles from "./styles";
import { Grid, LinearProgress, LinearProgressProps } from "@material-ui/core";

interface LinearProgresssProps {
  value: number;
  type?: boolean;
}
const LinearProgressWithLabel = (props: LinearProgressProps & LinearProgresssProps) => {
  const { type } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {type && <p>{`${Math.round(props.value)}%`}</p>}
      <LinearProgress variant="determinate" value={props.value} />
      {!type && <p>{`${Math.round(props.value)}%`}</p>}
    </Grid>
  );
};

export default LinearProgressWithLabel;

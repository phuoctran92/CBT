import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const FillInGaps = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      FillInGaps
    </Grid>
  )
};

export default FillInGaps
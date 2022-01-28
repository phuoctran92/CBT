import { Grid } from "@material-ui/core"
import { memo } from "react"
import useStyles from "./styles"

const FillInGaps = memo(() => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      FillInGaps
    </Grid>
  )
});

export default FillInGaps
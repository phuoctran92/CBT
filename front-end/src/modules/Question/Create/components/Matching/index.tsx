import { Grid } from "@material-ui/core"
import { memo } from "react"
import useStyles from "./styles"

const Matching = memo(() => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      Matching
    </Grid>
  )
});

export default Matching
import { Grid } from "@material-ui/core"
import { memo } from "react"
import useStyles from "./styles"

const Essay = memo(() => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      Essay
    </Grid>
  )
});

export default Essay
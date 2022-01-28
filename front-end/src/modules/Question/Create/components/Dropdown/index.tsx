import { Grid } from "@material-ui/core"
import { memo } from "react"
import useStyles from "./styles"

const Dropdown = memo(() => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      Dropdown
    </Grid>
  )
});

export default Dropdown
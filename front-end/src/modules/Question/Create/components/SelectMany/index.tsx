import { Grid } from "@material-ui/core"
import { memo } from "react"
import useStyles from "./styles"

const SelectMany = memo(() => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      SelectMany
    </Grid>
  )
});

export default SelectMany
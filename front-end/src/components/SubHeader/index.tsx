import { Grid, Typography } from "@material-ui/core"
import useStyles from "./styles"

interface SubHeaderProps {
  value: string,
  icon: any
}

const SubHeader = (props: SubHeaderProps) => {
  const { value, icon } = props
  const classes = useStyles()

  return (
    <Grid className={classes.subheader} >
      <img src={icon} alt='sub-icon' />
      <Typography>{value}</Typography>
    </Grid>
  )
}


export default SubHeader
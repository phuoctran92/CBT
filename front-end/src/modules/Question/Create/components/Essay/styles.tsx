import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      '& > div:first-child': {
        paddingRight: 20,
        marginTop: 0
      },
      '& > div:nth-child(2)': {
        marginTop: 0
      },
      '& > div': {
        marginTop: 20
      }
    },
  }))
import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      //background: '#FAFAFA',
    },
    list: {
      '& .MuiListItemIcon-root': {
        minWidth: 40
      }
    }
  }))
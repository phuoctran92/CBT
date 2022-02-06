import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      background: '#FFF',
      marginTop: 10,
      padding: '0px 20px 20px 20px',
      borderRadius: 5,
      '& > div:first-child': {
        paddingRight: 20,
        //marginTop: 0
      },
      '& > div': {
        marginTop: 20
      }
    },
    groupBtn: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& > button': {
        marginLeft: 10
      }
    },
  }))
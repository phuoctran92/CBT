import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    dialog: {
      '& .MuiGrid-spacing-xs-2': {
        margin: 'unset',
        width: 'unset'
      }
    },
    container: {
      minWidth: 800,
      minHeight: 300,
      padding: 20
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      color: '#333333'
    },
    questionNum: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700
    },
    answers: {
      display: 'flex',
      paddingLeft: 20,
      '& .MuiTypography-body1': {
        fontSize: 16,
        fontWeight: 500
      }
    },
    feedback: {
      '& .MuiAlert-root': {
        padding: '0px 10px'
      },
      '& .MuiAlert-icon': {
        padding: '20px 0px'
      }
    },
    feedbackBtn: {
      cursor: 'pointer',
      background: '#BDBDBD',
      fontSize: 14,
      width: 120,
      textAlign: 'center',
      borderRadius: 5,
      padding: 3
    }
  }))
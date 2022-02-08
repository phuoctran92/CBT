import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    header: {
      display: 'flex',
      marginBottom: 10,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      '& >div:first-child': {
        width: '100%'
      },
    },
    avatar: {
      marginLeft: 10,
      width: 150,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '& > p': {
        marginRight: 5,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    },
    typeChoice: {
      background: '#FFFFFF',
      padding: 15,
      width: '100%',
      '& > p': {
        fontWeight: 600,
        fontSize: 16,
        margin: 0
      }
    },
    groupBtn: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'flex-end',
      '& > button': {
        marginLeft: 10
      }
    },
    content: {
      background: '#FFFFFF',
      padding: 20,
      marginTop: 20
    }
  }))
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';

export default makeStyles(() =>
  createStyles({
    successStatus: {
      paddingLeft: '30px',
      backgroundColor: '#009444',
    },
    processStatus: {
      paddingLeft: '30px',
      backgroundColor: '#FFD834',
    },
    cancelStatus: {
      paddingLeft: '30px',
      backgroundColor: '#FD5A65',
    },
    boxStatus: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
      padding: '0px 6px',
      color: theme.title,
      height: '29px',
      width: 'fit-content',
      borderRadius: '10px',
    },
  })
);

// // export default useStyles;

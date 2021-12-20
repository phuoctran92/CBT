import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      '& > div > div': {
        borderRadius: 10,
      },
    },
    containerDialog: {
      padding: '30px 20px',
      width: '500px'
    },
    containerContent: {
      flexDirection: 'column',
      '& > img': {
        width: 64.5,
      },
      '& > p': {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#304D95',
        margin: '10px 0px 20px',
      },
    },
    containerButton: {
      display: 'flex',
      justifyContent: 'center',
        '& button': {
          fontWeight: 'bold',
        },
    },
  })
);

// export default useStyles;

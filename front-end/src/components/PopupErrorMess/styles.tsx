import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      '& > div > div': {
        borderRadius: 10,
      },
    },
    containerDialog: {
      padding: '40px 10px',
      minWidth: 550,
    },
    containerContent: {
      display: 'grid',
      '& > img': {
        justifySelf: 'center'
      },
      '& >div:first-child': {
        padding: 0,
        '&>h2': {
          fontSize: 30,
          textAlign: 'center',
        },
      },
      '& >div:last-child': {
        '&>p': {
          fontSize: 14,
          textAlign: 'center',
        },
      },
    },
    titleMess: {
      maxWidth: '100%',
      '& > h2': {
        fontFamily: 'Arial Rounded MT Bold',
        fontWeight: 700,
        fontSize: 24,
        color: '#304D95',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      }
    },
    subTitle: {
      fontFamily: 'Arial Rounded MT',
      fontWeight: 700,
      fontSize: 14,
      color: '#FF6D03',
      justifySelf: 'center',
      margin: 0,
      marginBottom: 5
    },
    containerButton: {
      '& >button:first-child': {
        padding: "9px 83px",
        textTransform: 'capitalize',
        borderRadius: 40,
        marginRight: 15,
        "&:hover": {
          borderRadius: 40,
        },
        '& >span:first-child': {
          fontSize: 14,
        }
      },
    },
  })
);

// export default useStyles;
import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      '& > div > div': {
        borderRadius: 10,
      },
    },
    containerDialog: {
      padding: '85px 0px 40px',
    },
    '&.MuiPaper-rounded': {
      borderRadius: '10px !important',
    },
    containerContent: {
      '& >div:first-child': {
        padding: 0,
        '&>h2': {
          fontSize: 30,
          fontWeight: 400,
          lineHeight: '36px',
          textAlign: 'center',
          color: '#05111E',
        },
      },
      '& >div:last-child': {
        '&>p': {
          fontSize: 18,
          fontWeight: 300,
          textAlign: 'center',
          color: '#05111E',
        },
      },
    },
    containerButton: {
      '& >button:first-child': {
        padding: "14px 83px",
        textTransform: 'capitalize',
        borderRadius: 40,
        marginRight: 15,
        "&:hover": {
          borderRadius: 40,
        },
        '& >span:first-child': {
          fontSize: 14,
          color: '#343868',
          textDecoration: 'underline',
        }
      },
    },
  })
);

// export default useStyles;

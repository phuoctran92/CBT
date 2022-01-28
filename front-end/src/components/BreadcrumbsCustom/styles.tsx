import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      background: '#FFFFFF',
      borderRadius: 5,
      alignItems: 'center',
      height: 50,
      '& .MuiDivider-flexItem': {
        margin: '12px 10px'
      }
    },
    name: {
      fontSize: 20,
      fontWeight: 700,
      marginLeft: 23
    },
    containerBreadcrumbs: {
      marginLeft: 10,
      '& > ol': {
        fontSize: 14,
        fontWeight: 700,
        color: '#333333',
        textTransform: "capitalize",
        '& > .MuiBreadcrumbs-separator': {
          margin: "0px 12px",
        },
        '& > li:first-child': {
          '& > a > button': {
            display: 'none'
          }
        },
        '& > li': {
          letterSpacing: 1,
          '& > a': {
            fontSize: 14,
            fontWeight: 700,
            color: '#333333',
            textDecoration: 'none',
            '& > span': {
              letterSpacing: 1,
              opacity: 0.5,
            },
            '& > button': {
              marginRight: 12,
              padding: 0,

            },
          },
          '& > p': {
            fontSize: 14,
            fontWeight: 700,
            color: '#333333',
            textDecoration: 'none',
          },
        },
      },
    },
    link1: {
      fontSize: 14,
      fontWeight: 700,
      color: '#333333',
      textDecoration: 'none',
      letterSpacing: 1,
      opacity: 0.5,
    }
  })
);

// // export default useStyles;

import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';

export default makeStyles(() =>
  createStyles({
    containerBreadcrumbs: {
      '& > ol': {
        fontSize: 18,
        fontWeight: 700,
        color: '#304D95',
        textTransform: "capitalize",
        '& > .MuiBreadcrumbs-separator': {
          margin: "0px 12px",
        },
        '& > li': {
          fontFamily: 'Arial Rounded MT !important',
          letterSpacing: 1,
          '& > a': {
            fontSize: 18,
            fontWeight: 700,
            color: theme.subColor,
            textDecoration: 'none',
            '& > span': {
              fontFamily: 'Arial Rounded MT !important',
              letterSpacing: 1,
              opacity: 0.5,
            },
            '& > button': {
              marginRight: 12,
              padding: 0,

            },
          },
          '& > p': {
            fontSize: 18,
            fontWeight: 700,
            color: theme.subColor,
            textDecoration: 'none',
          },
        },
      },
    },
    // breadcrumbs: {
    //   "& > ol > li > p > div":{
    //     display: 'flex',
    //     "& > span": {
    //       opacity: 0.5,
    //     },
    //     "& > img": {
    //       margin: "0px 12px",
    //     },
    //   }
    // }
  })
);

// // export default useStyles;

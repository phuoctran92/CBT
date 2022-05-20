import { createStyles, makeStyles } from '@material-ui/core/styles';


export default makeStyles(() =>
  createStyles({
    container: {
      marginBottom: 10,
      '& > div': {
        fontSize: 14,
      }
    },
    textTitle: {
      lineHeight: '17px',
      color: "#333333",
      fontSize: 14,
      paddingBottom: 9,
      fontWeight: 700,
      whiteSpace: 'nowrap',
    },
  }),
  {
    name: 'Inputs',
    index: 1,
  }
);

// // export default useStyles;

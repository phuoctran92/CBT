import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    dialog: {
      '& .MuiGrid-spacing-xs-2': {
        margin: 'unset',
        width: 'unset'
      }
    },
    container: {
      padding: 30,
      maxWidth: 800,
      justifyContent: 'space-between',
    },
    title: {
      margin: '0 0 12px 8px',
      fontSize: 20,
      fontWeight: 700
    },
    groupBtn: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'space-between'
    },
  })
);

// export default useStyles;

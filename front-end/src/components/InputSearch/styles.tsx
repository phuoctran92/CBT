import { createStyles, makeStyles } from '@material-ui/core/styles';


export default makeStyles(() =>
  createStyles({
    container: {
      
    },
    fullWidth: {
      width: '100%',
    },
    rootTextField: {
      width: '100%',
      '& > div': {
        borderRadius: 44,
        border: "2px solid #304D95 !important",
        background: '#FFFFFF',
      },
    },
    inputTextfield: {
      '&::placeholder': {
        opacity: 1,
        color: '#8E929E',
        fontSize: 14,
      },
      padding: '0px 30px',
      height: 40,
      fontSize: 14,
      fontWeight: 500,
      color: '#333333',
      borderRadius: 40,
      letterSpacing: 1
    },
  }),
  {
    name: 'InputSearch',
    index: 1,
  }
);

// // export default useStyles;

import { createStyles, makeStyles } from '@material-ui/core/styles';


export default makeStyles(() =>
  createStyles({
    container: {

    },
    fullWidth: {
      width: '100%',
    },
    rootTextField: {
      minWidth: 300,
      '& .MuiInputAdornment-positionStart': {
        marginRight: 0,
        marginLeft: 5
      },
      '& > div': {
        borderRadius: 44,
        //border: "2px solid #304D95 !important",
        background: '#EEF5F9',
      },
    },
    inputTextfield: {
      '&::placeholder': {
        opacity: 1,
        color: '#8E929E',
        fontSize: 14,
      },
      padding: '0 15px 0 2px',
      height: 40,
      fontSize: 14,
      fontWeight: 500,
      color: '#333333',
      borderRadius: 40,

    },
  }),
  {
    name: 'InputSearch',
    index: 1,
  }
);

// // export default useStyles;

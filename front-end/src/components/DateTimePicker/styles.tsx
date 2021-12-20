import { createStyles, makeStyles } from '@material-ui/core/styles';


export default makeStyles(() =>
  createStyles({
    container: {
      marginBottom: '5%',
    },
    textTitle: {
      lineHeight: '17px',
      color: '#112577',
      fontSize: 14,
      paddingBottom: 9,
      whiteSpace: 'nowrap',
    },
    textError: {
      color: 'red',
      fontSize: 14,
      padding: '5px 0px',
      whiteSpace: 'nowrap',
    },
    fullWidth: {
      width: '100%',
    },
    datePicker: {
      width: '100%',
      '& > div': {
        borderRadius: 40,
        border: '1px solid #969DBA',
        background: '#F3F3F3',
        '& > div > button': {
          marginRight: 10,
          '& > span > img': {
            width: 24,
          },
        },
      },
      '& p.Mui-error':{
        display: 'none'
      }
    },
    inputdatePicker: {
      '&::placeholder': {
        opacity: 1,
        color: '#8E929E',
        fontSize: 14,
      },
      padding: '0px 19px',
      height: 48,
      fontSize: 14,
      color: '#112577',
      borderRadius: 40,
    },
    inputInvalid: {
      '& > div': {
        border: '1px solid red !important',
      },
    },
  }),
  {
    name: 'DateTimePicker',
    index: 1,
  }
);

// // export default useStyles;

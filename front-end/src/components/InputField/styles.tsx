import { createStyles, makeStyles } from '@material-ui/core/styles';


export default makeStyles(() =>
  createStyles({
    input: {
      '& >div': {
        padding: 0
      }
    },
    inputTextfield: {
      '&::placeholder': {
        opacity: 0.5,
        color: '#333333',
        fontSize: 18,
      },
      padding: 10,
      height: 48,
      fontSize: 18,
      fontWeight: 500,
      color: '#333333',
      borderRadius: 10,
      border: '1px solid #304D95',
      lineHeight: 1.25,

    },
  }),
  {
    name: 'QuestionInput',
    index: 1,
  }
);

// // export default useStyles;

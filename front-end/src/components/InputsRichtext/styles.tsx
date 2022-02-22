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
    quill: {
      '& > .ql-toolbar': {
        background: '#FAFAFA',
        '& > .ql-formats': {
          '& > button': {
            '&:hover': {
              background: '#dedede90'
            },
          },
          '& > span': {
            '&:hover': {
              background: '#dedede'
            }
          },
        },
        '& > span': {
          marginRight: '0px !important',
          borderRight: '1px solid #BDBDBD'
        },
        '& .ql-active': {
          background: '#dedede'
        },
        '& .ql-create-blank': {
          background: '#304D95',
          borderRadius: 5,
          marginLeft: 10,
          marginRight: 10,
          minWidth: 100,
          borderRight: 'unset !important'
        }
      }
    }
  }),
  {
    name: 'Inputs',
    index: 1,
  }
);

// // export default useStyles;

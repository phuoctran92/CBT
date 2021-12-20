import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';

export default makeStyles(() =>
  createStyles({
    quill: {
      height: 260,
      '& > .ql-toolbar': {
        borderRadius: '10px 10px 0px 0px',
        borderColor: `${theme.subColor}!important`,
        '& > .ql-formats > button': {
          margin: '0px 2px',
          backgroundColor: `${theme.subColor}10`,
          height: 28,
          width: 32,
        }
      },
      '& > .ql-container': {
        borderRadius: '0px 0px 10px 10px',
        borderColor: `${theme.subColor}!important`,
        fontSize: 14,
        height: 'calc(100% - 46px)!important',
      }
    },
  })
);
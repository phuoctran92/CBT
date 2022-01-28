import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';
import Images from 'config/images';

export default makeStyles(() =>
  createStyles({
    root: {
      color: "#304D95",
      margin: '4px 4px',
      size: 'small',
      borderRadius: '3px',
      height: '30px',
      "&:disabled": {
        backgroundColor: '#304D95',
      }
    },
    btnEdit: {
      "&:hover": {
        backgroundColor: '#D1DEF590',
      },
      background: `url(${Images.icPencilLineWhite}) center no-repeat;`,
      backgroundColor: '#D1DEF5',
      backgroundSize: 25,
      height: '30px',
      width: '30px',
    },
    btnDelete: {
      "&:hover": {
        backgroundColor: '#F9D0D990',
      },
      backgroundColor: '#F9D0D9',
      background: `url(${Images.icDelete}) center no-repeat;`,
      backgroundSize: 25,
      height: '30px',
      width: '30px',
    },
    btnView: {
      "&:hover": {
        backgroundColor: '#304D95',
      },
      backgroundColor: theme.subColor,
      background: `url(${Images.icViewBtn}) center no-repeat;`,
      backgroundSize: 25,
      height: '30px',
      width: '30px',
    },
    btnShare: {
      "&:hover": {
        backgroundColor: '#304D95',
      },
      backgroundColor: theme.subColor,
      background: `url(${Images.icShare}) center no-repeat;`,
      backgroundSize: 25,
      height: '30px',
      width: '30px',
    },
  })
);

// // export default useStyles;

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
        backgroundColor: '#304D95',
      },
      background: `url(${Images.icPencilLineWhite}) center no-repeat;`,
      backgroundColor: theme.subColor,
      backgroundSize: 20,
      height: '24px',
      width: '24px',
    },
    btnDelete: {
      "&:hover": {
        backgroundColor: '#304D95',
      },
      backgroundColor: theme.subColor,
      background: `url(${Images.icDelete}) center no-repeat;`,
      backgroundSize: 20,
      height: '24px',
      width: '24px',
    },
    btnView: {
      "&:hover": {
        backgroundColor: '#304D95',
      },
      backgroundColor: theme.subColor,
      background: `url(${Images.icViewBtn}) center no-repeat;`,
      backgroundSize: 20,
      height: '24px',
      width: '24px',
    },
    btnShare: {
      "&:hover": {
        backgroundColor: '#304D95',
      },
      backgroundColor: theme.subColor,
      background: `url(${Images.icShare}) center no-repeat;`,
      backgroundSize: 20,
      height: '24px',
      width: '24px',
    },
  })
);

// // export default useStyles;

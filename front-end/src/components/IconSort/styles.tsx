import { createStyles, makeStyles } from '@material-ui/core/styles';
import images from 'config/images';

export default makeStyles(() =>
  createStyles({
    btnDefault: {
      display: 'inline-block',
      padding: 0,
      width: '25px',
      height: '25px',
      minWidth: '20px',
      background: `url(${images.icSort}) center no-repeat;`,
      marginLeft: 10,
      backgroundSize: 20,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    sortZA: {
      background: `url(${images.icSortZA}) center no-repeat;`,
      backgroundSize: 20
    },
    sortAZ: {
      background: `url(${images.icSortAZ}) center no-repeat;`,
      backgroundSize: 20
    }
  })
);

// // export default useStyles;

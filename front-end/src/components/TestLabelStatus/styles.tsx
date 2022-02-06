import { createStyles, makeStyles } from '@material-ui/core/styles';
import Images from 'config/images';

export default makeStyles(() =>
  createStyles({
    circleGreen: {
      background: `url(${Images.icCircleGreen}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    circleYellow: {
      background: `url(${Images.icCircleYellow}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    circleRed: {
      background: `url(${Images.icCircleRed}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    circleBlue: {
      background: `url(${Images.icCircleBlue}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
  })
);

// // export default useStyles;

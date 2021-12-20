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
    circlePink: {
      background: `url(${Images.icCirclePink}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    circleGray: {
      background: `url(${Images.icCircleGray}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    checkCircle: {
      background: `url(${Images.icCheckCircle}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    tierBronze: {
      background: `url(${Images.icTierBronze}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    tierSilver: {
      background: `url(${Images.icTierSilver}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    tierGold: {
      background: `url(${Images.icTierGold}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
    tierPlatinum: {
      background: `url(${Images.icTierPlatinum}) left no-repeat;`,
      backgroundSize: 20,
      paddingLeft: '30px',
    },
  })
);

// // export default useStyles;

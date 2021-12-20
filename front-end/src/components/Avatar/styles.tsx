import { createStyles, makeStyles } from '@material-ui/core/styles';
import Images from 'config/images';
import theme from 'config/theme';
const styleComponent = makeStyles(() =>
  createStyles({
    containerAvatar: {
      alignItems: 'center',
      display: 'flex',
      marginTop: -2,
      '&.isError': {
        alignItems: 'flex-end'
      }
    },
    textError: {
      color: 'red',
      fontSize: 14,
      padding: '5px 0px',
      whiteSpace: 'nowrap',
      paddingBottom: 0,
    },
    icAvatar: {
      '& > p': {
        color: theme.subColor,
        fontSize: 14,
        fontWeight: 500,
      },
      '& > div > span': {
        padding: 2,
        '& > div': {
          width: 60,
          height: 60,
        },
        '& > span': {
          top: 12,
          right: 6,
          '& > img': {
            width: 22,
          },
        },
      },
    },
    icUpload: {
      display: 'flex',
      cursor: 'pointer',
      '&.isError': {
        flexDirection: 'column'
      },
      '& > span': {
        color: theme.subColor,
        fontSize: 14,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        background: `url(${Images.icUpload}) left center no-repeat`,
        paddingLeft: 35,
        backgroundSize: 25,
        height: 25,
        display: 'flex',
        alignItems: 'center',
      },
    },
  }),
  
);

export default styleComponent;

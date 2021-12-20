import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';
import Images from 'config/images';

export default makeStyles(() =>
  createStyles({
    container: {
      overflow: 'hidden',
      "& > p": {
        fontWeight: 700,
        color: theme.subColor,
      },
      cursor: 'pointer',
      outlineStyle: 'dashed',
      outlineWidth: '2px',
      outlineColor: theme.subColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '109px',
      '& .hasImage button': {
        position: 'absolute',
        top: 'calc(50% - 24px)',
        margin: 'auto',
        width: '120px',
        left: 'calc(50% - 60px)',
        '&:hover': {
          backgroundColor: '#FFD834',
        }
      }
    },
    iconButton: {
      background: `url(${Images.icUpload}) center no-repeat;`,
      backgroundColor: theme.mainColor,
      width: '50px',
      height: '50px',
      borderRadius: '36px',
      marginLeft: '15px',
    },
  })
);
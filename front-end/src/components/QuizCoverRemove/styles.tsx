import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from 'config/theme';

export default makeStyles(() =>
  createStyles({
    container: {
      "& > p": {
        fontWeight: 700,
        color: theme.subColor,
      },
      outlineStyle: 'dashed',
      outlineWidth: '2px',
      outlineColor: theme.subColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '109px',
    },
  })
);
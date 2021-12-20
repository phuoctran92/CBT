import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    subheader: {
      display: 'flex',
      alignItems: 'center',
      '& >p': {
        marginLeft: 8,
        fontWeight: 700,
        color: '#304D95',
        letterSpacing: 1,
        fontSize: 18
      }

    }
  }))
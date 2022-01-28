import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    root: {
      margin: '30px 0',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflowX: 'hidden'
    },
    arialFont: {
      border: '1px solid #304D95',
      fontWeight: 700,
      fontSize: 14,
      width: 24,
      height: 24,
      margin: '0px 4px',
      borderRadius: '5px',
      color: '#304D95',

    },
    selectedIcon: {
      color: '#FFFFFF',
      background: '#304D95',
      '&:hover': {
        opacity: 0.9,
        background: '#304D95'
      }
    },
    ul: {
      listStyle: 'none',
      padding: 2,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      width: 'calc(100% - 134px)',
      paddingLeft: '130px',
    },
    icon: {
      '& > span > img': {
        width: 12,
        height: 12,
        color: '#304D95'
      },
      // border: '1px solid #304D95',
      margin: '0px 12px',
      borderRadius: 5,
      width: 26,
      height: 26,
    },
    select: {
      background: '#FFFFFF',
      borderRadius: 5,
      marginRight: 20,
      minWidth: 130,
      maxWidth: 130,
      '& .MuiSelect-selectMenu': {
        paddingLeft: 16,
        color: '#333333',
        fontSize: 14,
        borderRadius: 5,
        border: '1px solid #BDBDBD'
      },
      '& .MuiSelect-icon': {
        top: 7,
        right: 16
      }
    },
  })
);

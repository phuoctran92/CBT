import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    container: {
      zIndex: 2,
      width: "149px",
      marginBottom: '5%',
    },
    root : {
      position: 'absolute',
      boxShadow: 'none !important',
      padding: 0,
      background: '#FFD834',
      color: '#304D95',
      borderRadius: '24px !important',
      '& .MuiAccordionDetails-root': {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
     },
     '& .MuiAccordionSummary-root': {
        maxHeight: 48,
      },
     '& .MuiAccordionSummary-root.Mui-expanded': {
        minHeight: 'unset'
     },
     '& .MuiMenuItem-root': {
      fontFamily: 'Arial Rounded MT !important',
      fontWeight: 700,
      letterSpacing: 1,
      fontSize: 14,
     },
     '& .MuiAccordionSummary-content.Mui-expanded': {
       marginLeft: -8
     },
     '& .MuiAccordionSummary-content' : {
      marginLeft: -8
     },
     '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
       transform: 'rotate(90deg)',
     },
     '& .MuiIconButton-edgeEnd': {
       marginRight: 'unset'
     },
     '& .MuiListItem-root': {
       '&:last-child': {
         borderBottomLeftRadius: '26px !important',
         borderBottomRightRadius: '26px !important'
       }
     }
    },
    option: {
      fontFamily: 'Arial Rounded MT !important',
      fontWeight: 700,
      letterSpacing: 1,
      fontSize: 14,
      paddingLeft: 24,
      minHeight: 37
    },
    selected : {
      background: 'none !important',
      borderTopLeftRadius: '26px !important',
      borderTopRightRadius: '26px !important'
    },
    borderTop: {
      borderTop: '2px solid #304D95'
    }
  }),
  {
    name: 'InputSelect',
    index: 1,
  }
);

// export default useStyles;

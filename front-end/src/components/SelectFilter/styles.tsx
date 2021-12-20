import { createStyles, makeStyles } from '@material-ui/core/styles';
export default makeStyles(() =>
  createStyles({
    container: {
      zIndex: 999,
      width: 148,
      height: 42,
    },
    root: {
      border: '1px solid #666666',
      color:  '#666666 !important',
      position: 'absolute',
      boxShadow: 'none !important',
      padding: 0,
      margin: 0,
      borderRadius: '24px !important',
      height: '100%',
      '&:before': {
        backgroundColor: 'unset',
      },
      '&.Mui-expanded': {
        margin: '0px',
        height: 'fit-content',
      },
      '& .MuiAccordionDetails-root': {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      },
      '& .MuiAccordionSummary-root': {
        maxHeight: 42,
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        minHeight: 'unset'
      },
      '& .MuiMenuItem-root': {
        // fontFamily: 'Arial Rounded MT !important',
        fontWeight: 600,
        letterSpacing: 1,
        fontSize: 14,
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        marginLeft: -8
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: -8
      },
      // '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
      //   transform: 'rotate(90deg)',
      // },
      '& .MuiIconButton-edgeEnd': {
        marginRight: 'unset'
      },
      '& .MuiListItem-root': {
        '&:last-child': {
          borderBottomLeftRadius: '26px !important',
          borderBottomRightRadius: '26px !important'
        }
      },
      '& .MuiAccordion-root.Mui-disabled': {
        color: '#666666 !important'
      },
    },
    option: {
      fontFamily: 'Arial Rounded MT !important',
      letterSpacing: 1,
      fontSize: 14,
      fontWeight: 600,
      color: '#666666 !important',
      paddingLeft: 24,
      minHeight: 37,
    },
    selected: {
      background: 'none !important',
      borderTopLeftRadius: '26px !important',
      borderTopRightRadius: '26px !important'
    },
    borderTop: {
      borderTop: '2px solid #666666'
    }
  }),
  {
    name: 'InputSelect',
    index: 1,
  }
);
// export default useStyles;

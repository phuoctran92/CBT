import { makeStyles, createStyles } from "@material-ui/core/styles";
import theme from "config/theme";

export default makeStyles(() =>
  createStyles({

    customSelect: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '4px 16px',
      minHeight: '48px',

      border: `1px solid ${theme.subColor}`,
      boxSizing: 'border-box',
      borderRadius: '26px',

      alignSelf: 'stretch',
      margin: '20px 0px',
    },
    input: {
      border: 'none',
      display: 'flex',
      fontSize: 14,
      fontWeight: 700,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '8px',

      width: '157px',
      height: '28px',
      margin: '0px 4px',
    },

    divive: {
      width: '1px',
      height: '32px',
      backgroundColor: '#C4C4C4',
      margin: '0px 4px',
    },


    optionList: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '8px',

      width: '100%',
      minHeight: '127px',

      border: `1px solid ${theme.subColor}`,
      boxSizing: 'border-box',
      borderRadius: '10px',
      margin: '0px 0px 4px',
      '& img': {
        display: 'none',
      },
    },

    option: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      height: '33px',

      background: '#6988D7',
      borderRadius: '10px',

      cursor: 'pointer',
      margin: '4px',
      color: theme.title,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 1,
      '&:hover': {
        backgroundColor: `${theme.subColor}90`,
      },
      '& img': {
        width: '8px',
        height: '8px',
        marginRight: '8px',
        cursor: 'pointer',
      },
    },

  })
)
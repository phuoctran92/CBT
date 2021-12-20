import { createStyles, makeStyles } from "@material-ui/core/styles";
import theme from "config/theme";

export default makeStyles(() =>
  createStyles({
    root: {
      '& .MuiButton-label': {
        fontSize: 14,
        color: "#304D95",
        fontWeight: 700,
        letterSpacing: 1,
        fontFamily: 'Arial Rounded MT !important',
      },
      textTransform: "capitalize",
      width: "100%",
      borderRadius: 40,
      cursor: "pointer",
      boxShadow: "unset!important",
      margin: "20px 0px",
      "& > span": {
        "& > .MuiButton-startIcon": {
          marginRight: "10px",
        },
        "& > .MuiButton-endIcon": {
          marginLeft: "19px",
        },
      },
    },
    btnLarge: {
      backgroundColor: theme.mainColor,
      minWidth: 208,
      padding: "14px 25px",
    },
    btnMedium: {
      backgroundColor: theme.mainColor,
      minWidth: 173,
      padding: "14px 25px",
    },
    btnSmall: {
      backgroundColor: theme.mainColor,
      //minWidth: 148,
      padding: "8px 25px",
    },
    btnIcon: {
      backgroundColor: theme.mainColor,
      minWidth: 100,
      padding: "12px 21px",
      fontSize: 14,
      fontWeight: 700,
      whiteSpace: "nowrap",
    },
    btnIconSmall: {
      backgroundColor: theme.mainColor,
      fontSize: 14,
      fontWeight: 700,
      width: '48px',
      height: '48px',
      margin: 0,
      borderRadius: 26,
    }
  })
);

// // export default useStyles;

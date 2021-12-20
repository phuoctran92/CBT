import { createStyles, makeStyles } from "@material-ui/core/styles";
import theme from "config/theme";

export default makeStyles(() =>
  createStyles({
    root: {
      fontSize: 14,
      fontWeight: 700,
      borderColor: theme.subColor,
      color: theme.subColor,
      textTransform: "capitalize",
      width: "100%",
      borderRadius: 40,
      cursor: "pointer",
      boxShadow: "unset!important",
      margin: "20px 0px",
      "& > span": {
        "& > .MuiButton-startIcon": {
          marginRight: "19px",
        },
        "& > .MuiButton-endIcon": {
          marginLeft: "19px",
        },
      },
    },
    btnLarge: {
      backgroundColor: theme.bg,
      minWidth: 208,
      padding: "14px 25px",
    },
    btnMedium: {
      backgroundColor: theme.bg,
      minWidth: 173,
      padding: "14px 25px",
    },
    btnSmall: {
      backgroundColor: theme.bg,
      //minWidth: 148,
      padding: "8px 25px",
    },
    btnIcon: {
      backgroundColor: theme.bg,
      minWidth: 100,
      padding: "12px 21px",
      fontSize: 14,
      fontWeight: 700,
      whiteSpace: "nowrap",
    }
  })
);

// // export default useStyles;

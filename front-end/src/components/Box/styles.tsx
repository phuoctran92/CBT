import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from "config/theme";

export default makeStyles(() =>
  createStyles({
    boxF: {
      height: "110px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      borderRadius: "10px",
      justifyContent: "center",
      background: theme.bg,
      boxShadow: "8px 8px 10px rgba(48, 77, 149, 0.3)",

      position: "static",
    },

    boxT: {
      height: "110px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      borderRadius: "10px",
      alignItems: "center",
      background: theme.bg,
      boxShadow: "8px 8px 10px rgba(48, 77, 149, 0.3)",

      position: "static",
    },

    item1F: {
      minWidth: "unset",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      position: "relative",
      width: "44px",
      height: "44px",

      background: theme.subColor,
      borderRadius: "50%",

      margin: "0px 40px",
      "&:hover": {
        backgroundColor: `${theme.subColor}80`,
      },
    },
    item1T: {
      minWidth: "unset",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      position: "relative",
      width: "52px",
      height: "52px",

      background: theme.mainColor,
      borderRadius: "50%",
      margin: "8px 0px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: `${theme.mainColor}80`,
      },
    },

    item2F: {
      position: "static",
      textAlign: "center",
    },

    item2T: {
      position: "static",

      fontWeight: 800,
      fontSize: "14px",

      textAlign: "center",
      letterSpacing: "1px",
      color: theme.subColor,
      margin: "8px 0px",
    },

    number: {
      position: "static",

      fontWeight: 800,
      fontSize: "24px",

      letterSpacing: "2px",
      color: theme.mangoColor,
      margin: "6px 0px",
    },
    title: {
      position: "static",

      fontWeight: 500,
      fontSize: "14px",

      letterSpacing: "1px",
      color: "#000",
      margin: "6px 0px",
    },
  })
);

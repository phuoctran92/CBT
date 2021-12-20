import { createStyles, makeStyles } from "@material-ui/core/styles";
import theme from "config/theme";

export default makeStyles(() =>
  createStyles({
    root: {
      "& .MuiLinearProgress-root":{
        height: 12,
        backgroundColor: "#EEEEEE",
        borderRadius: 10,
        "& > .MuiLinearProgress-barColorPrimary": {
          backgroundColor: theme.subColor,
          borderRadius: 10,
        },
      },
      "& > p": {
        display: "flex",
        justifyContent: "flex-end",
        fontSize: 18,
        fontWeight: 700,
        color: theme.subColor,
      }
    },
  })
);

// // export default useStyles;

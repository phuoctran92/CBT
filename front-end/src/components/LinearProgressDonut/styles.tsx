import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      display: "inline-flex",
      "& .MuiCircularProgress-colorPrimary":{
        color: "#FF6D03",
      },
    },
    text: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > span": {
        color: "#FF6D03",
        fontSize: 14,
        fontWeight: 700,
      }
    },
  })
);

// // export default useStyles;

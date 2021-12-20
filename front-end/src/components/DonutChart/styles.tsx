import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    chartdiv: {
      width: "100%",
      height: 250,
      '& > div > svg > g > g:nth-child(2) > g:nth-child(2)': {
        display: 'none',
      }
    },
    legend: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: "0px 10px",
      "& > div ": {
        margin: "10px 20px",
        "& > div ": {
          display: "flex",
          alignItems: "center",
          "& > div:last-child": {
            fontWeight: 700,
            fontSize: 14,
            "& > div": {
              fontWeight: 400,
            },
          },
        },
      },
    },
  })
);

// // export default useStyles;

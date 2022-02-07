import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    root: {
      maxHeight: 35,
      background: '#0E32AE',
      '& .MuiButton-label': {
        //marginLeft: 5,
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: 500,
        letterSpacing: 1,
      },
      '&:hover': {
        background: '#0E32AE90'
      },
      textTransform: "capitalize",
      borderRadius: 5,
      boxShadow: "unset!important",
      "& > span": {
        "& > .MuiButton-startIcon": {
          marginRight: 5,
        },
        "& > .MuiButton-endIcon": {
          marginLeft: 5,
          //marginRight: 5,
        },
      },
    },
  })
);

// // export default useStyles;

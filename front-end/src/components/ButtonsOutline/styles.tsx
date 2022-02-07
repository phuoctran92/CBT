import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    root: {
      maxHeight: 35,
      background: '#FFFFFF',
      textTransform: "capitalize",
      borderRadius: 5,
      border: '1px solid #E1000A',
      boxShadow: "unset!important",
      '& .MuiButton-label': {
        //marginLeft: 5,
        fontSize: 16,
        color: "#E1000A",
        fontWeight: 500,
        letterSpacing: 1,
      },
      '&:hover': {
        background: '#E1000A10'
      },
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

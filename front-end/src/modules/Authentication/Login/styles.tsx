import { createStyles, makeStyles } from "@material-ui/core/styles";
import theme from "config/theme";

export default makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: theme.subColor,
      height: "100vh",
      minHeight: 635,
      minWidth: 410,
    },
    container: {
      display: "flex",
    },
    wrapperAlert: {
      position: 'absolute',
      width: '100%',
      '& .MuiSnackbar-anchorOriginTopCenter': {
        top: '80px !important'
      },
      '& > * + *': {
        marginTop: 20,
      },
    },
    customMess: {
      '& > div:first-child': {
        display: 'none'
      }
    },
    icLogo: {
      height: 40,
      padding: "20px 55px",
    },
    rabbit: {
      backgroundColor: theme.mainColor,
      display: "flex",
      flexWrap: "nowrap",
      borderRadius: "70px 50px 50px 0px",
      height: 100,
      width: 'calc(100% - 70px)',
      position: 'relative',
      justifyContent: "space-between",
      '&::before': {
        content: "''",
        position: 'absolute',
        height: '80px',
        background: theme.mainColor,
        left: 0,
        bottom: '-80px',
        width: '90px',
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        height: '80px',
        background: theme.subColor,
        left: 0,
        bottom: '-80px',
        width: '90px',
        borderRadius: '150px 0 0',
      },
      '@media(max-width: 831px)': {
        width: '100%'
      },
    },
    title: {
      marginTop: -11,
      color: "#333333",
      fontWeight: 700,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: 'calc(100% - 263px*2 - 35px)',
      marginLeft: 'calc(263px + 35px)',
      "& > span": {
        "&:first-child": {
          fontSize: 40,
        },
        "&:last-child": {
          fontSize: 24,
        },
      },
      '@media(max-width: 831px)': {
        width: 'calc(100% - 263px*2)',
        marginLeft: 'calc(263px)',
      },
      '@media(max-width: 726px)': {
        width: '100%',
        marginLeft: '0',
      },
    },
    href: {
      color: '#BDBDBD !important'
    },
    input: {
      justifyContent: "center",
      display: "grid",
      minWidth: 410,
      "& > div > form > a": {
        marginLeft: 191,
        textDecoration: "none",
        fontSize: 14,
        fontWeight: 500,
        color: "#333333",
      },
    },
    disabled: {
      "& > div": {
        border: "2px solid transparent !important",
        background: "#FFFFFF !important",
        // "&:focus-within": {
        //   border: "2px solid #304D95 !important",
        // },
        "& > input": {
          height: 53,
        },
      },
    },
    inputError: {
      "& > div": {
        border: "2px solid #FD5A65 !important",
        background: '#FFFFFF !important',
        "&:focus-within": {
          border: "2px solid #FD5A65 !important",
          background: '#FFFFFF !important',
        }
      },
    },
    btn: {
      marginTop: "24px",
      width: "100%",
      backgroundColor: "#FF6D03",
      borderRadius: 40,
      height: 57,
      "&:hover": {
        backgroundColor: "#ff6d03a8",
      },
      "& > span": {
        fontSize: 14,
        fontWeight: 700,
        color: "#FFFFFF",
        textTransform: "capitalize",
      },
    },
    separator: {
      padding: "22px 0",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      "&::before": {
        content: '" "',
        flex: 1,
        borderBottom: `0.5px solid #6988D7`,
      },
      "&::after": {
        content: '" "',
        flex: 1,
        borderBottom: `0.5px solid #6988D7`,
      },
      "& > span": {
        color: '#6988D7',
        margin: "0px 21px",
        fontSize: 14,
        fontWeight: 700,
      },
    },
    brand: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 46px",
    },
  })
);

// export default useStyles;

import { createStyles, makeStyles } from "@material-ui/core/styles";
import theme from "config/theme";

export default makeStyles(() =>
  createStyles({
    container: {
      height: "100vh",
      backgroundColor: theme.mainColor,
    },
    toolbar: {
      width: 270,
      backgroundColor: theme.mainColor,
      borderTopRightRadius: 60,
    },
    logo: {
      backgroundColor: "#FFFFFF",
      display: "flex",
      justifyContent: "center",
      "& img": {
        width: 160,
        marginBottom: 70,
        marginTop: 12,
      },
    },
    profile: {
      marginTop: -55,
      height: 120,
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.subColor,
      borderRadius: "0px 65px 65px 0px",
      position: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        height: '60px',
        background: theme.subColor,
        left: 0,
        bottom: '-60px',
        width: '60px',
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        height: '60px',
        background: theme.mainColor,
        left: 0,
        bottom: '-60px',
        width: '60px',
        borderRadius: '150px 0 0',
      },
      '@media(max-width: 831px)': {
        width: '100%'
      },
    },
    list: {
      height: 'calc(100vh - 185px)',
      overflow: 'auto',
      "& > div": {
        backgroundColor: theme.mainColor,
        borderTopLeftRadius: 60,
        "& > ul": {
          padding: "32px 0px 20px 35px",
        },
      },
      '&::-webkit-scrollbar': {
        width: '12px !important',
        height: '12px !important',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
        border: 'none',
        '&:vertical': {
          borderTop: 'none',
          borderBottom: 'none',
        },
        '&:horizontal': {
          borderLeft: 'none',
          borderRight: 'none',
        }
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.subColor,
        backgroundClip: 'padding-box',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:vertical': {
          borderLeft: '3px solid transparent',
          borderRight: '3px solid transparent',
        },
        '&:horizontal': {
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
        }
      },
      '&::-webkit-scrollbar-corner': {
        background: 'transparent'
      }
    },
    containerAvatar: {
      marginLeft: 51,
      alignItems: "center",
      display: "flex",
      "& >div:first-child": {
        marginRight: 14,
        width: 60,
        height: 60,
      },
    },
    textAvatar: {
      flexDirection: "column",
      whiteSpace: "nowrap",
      color: "#FFFFFF",
      fontWeight: 700,
      "& >p:last-child": {
        fontWeight: 500,
        fontSize: 12,
        margin: 0,
        lineHeight: "100%",
      },
      "& >p:first-child": {
        fontSize: 16,
        width: 135,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        margin: 0,
        lineHeight: "24px",
      },
    },
    listWrap: {
      height: 56,
      paddingLeft: 25,
      borderRadius: "40px 0px 0px 40px",
      "&.Mui-selected": {
        fontSize: 14,
        color: "#343868",
        border: "unset",
        background: "#FFFFFF",
        borderRadius: "40px 0px 0px 40px",
        "&::before": {
          bottom: "100%",
          right: 0,
          content: '" "',
          position: "absolute",
          height: 20,
          width: 20,
          background:
            "radial-gradient(circle at top left, #fff0 72%, #fff 75%)",
        },
        "&::after": {
          right: 0,
          top: "100%",
          content: '" "',
          position: "absolute",
          height: 20,
          width: 20,
          bottom: 0,
          background:
            "radial-gradient(circle at bottom left, #fff0 72%, #fff 75%)",
        },
        "&:hover": {
          backgroundColor: "#fff",
          borderRadius: "40px 0px 0px 40px",
        },
        "&:focus": {
          backgroundColor: "#fff",
          borderRadius: "40px 0px 0px 40px",
        },
      },
      "&:hover": {
        backgroundColor: "#ffffff00",
        borderRadius: "40px 0px 0px 40px",
      },
      "& > .MuiListItemText-root > span": {
        fontSize: 14,
        color: theme.subColor,
        fontWeight: 700,
        whiteSpace: "break-spaces",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
      },
      "& > .MuiListItemIcon-root": {
        minWidth: 42,
        marginLeft: 5,
      },
    },
    containerLogout: {
      paddingLeft: 65,
      alignItems: "center",
      display: "flex",
      marginBottom: "50px !important",
      "& >img": {
        paddingRight: 21,
      },
      "& >p": {
        fontSize: 14,
        color: theme.subColor,
        fontWeight: 700,
        margin: 0,
      },
    },
    nested: {
      paddingLeft: 72,
      cursor: 'pointer',
      marginTop: 4,
      "& > div > span": {
        fontSize: 14,
        color: theme.subColor,
        fontWeight: 700,
        margin: 0,
      },
    },
    itemActive: {
      background: "#CF8B06",
      borderRadius: "25px 25px 0px 25px",
    },
    token: {
      marginLeft: 51,
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      '& img': {
        width: 20,
      },
      '& span': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '2px',
        color: theme.mainColor,
        marginLeft: '10px',
      }
    },
    divider: {
      margin: '10px 15px 10px 30px',
      backgroundColor: '#304D95'
    }
  })
);

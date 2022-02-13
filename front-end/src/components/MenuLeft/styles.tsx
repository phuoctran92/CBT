import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      height: "100vh",
      backgroundColor: '#FFFFFF',
    },
    toolbar: {
      width: 240,
    },
    logo: {
      backgroundColor: "#FFFFFF",
      height: 80,
      borderBottom: '1px solid #F9F9F9'
    },

    list: {
      height: 'calc(100vh - 185px)',
      overflow: 'auto',
      '& .MuiSvgIcon-root': {
        fill: 'none',
        stroke: "#333333",
        strokeWidth: 1.5
      },
      "& > div": {
        //backgroundColor: theme.mainColor,
        //borderTopLeftRadius: 60,
        "& > ul": {
          padding: "32px 0px 20px 0px",
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
        background: "#BDBDBD",
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
    listWrap: {
      height: 56,
      paddingLeft: 25,
      //borderRadius: "40px 0px 0px 40px",
      "&.Mui-selected": {
        paddingLeft: 20,
        fontSize: 14,
        color: "#E1000A",
        background: "#F9ECEF",
        borderLeft: "5px solid #E1000A",
        '& .MuiSvgIcon-root': {
          fill: 'none',
          stroke: "#E1000A"
        },
        "& > .MuiListItemText-root > span": {
          color: "#E1000A",
        },
        "&:hover": {
          backgroundColor: "#F9ECEF",
          //borderRadius: "40px 0px 0px 40px",
        },
        "&:focus": {
          backgroundColor: "#F9ECEF",
          //borderRadius: "40px 0px 0px 40px",
        },
      },
      "&:hover": {
        backgroundColor: "#F9ECEF",
        //borderRadius: "40px 0px 0px 40px",
      },
      "& > .MuiListItemText-root > span": {
        fontSize: 14,
        color: "#333333",
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
      paddingLeft: 30,
      alignItems: "center",
      display: "flex",
      marginBottom: "50px !important",
      "& >img": {
        paddingRight: 15,
      },
      "& >p": {
        fontSize: 14,
        color: "#333333",
        fontWeight: 700,
        margin: 0,
      },
    },

  })
);

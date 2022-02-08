import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: 20,
      '& > p': {
        margin: 0,
        fontSize: 16,
        fontWeight: 600
      }
    },
    list: {
      '& > ul': {
        display: 'flex',
        flexDirection: 'row',
      },
      '& .MuiListItem-root': {
        width: 'unset',
        '&:first-child': {
          marginLeft: 0,
        },
        marginLeft: 10,
      },
      '& .MuiSvgIcon-root': {
        fill: 'none',
        stroke: "#333333",
        strokeWidth: 1.5
      },
    },
    listWrap: {
      cursor: 'pointer',
      height: 43,
      paddingLeft: 10,
      borderRadius: 5,
      border: '1px solid #BDBDBD',
      "&.Mui-selected": {
        paddingLeft: 10,
        fontSize: 14,
        color: "#E1000A",
        background: "#F9ECEF",
        border: '1px solid #E1000A',
        '& .MuiSvgIcon-root': {
          fill: 'none',
          stroke: "#E1000A"
        },
        "& > .MuiListItemText-root > span": {
          color: "#E1000A",
        },
        "&:hover": {
          backgroundColor: "#F9ECEF",
        },
        "&:focus": {
          backgroundColor: "#F9ECEF",
        },
      },
      "&:hover": {
        backgroundColor: "#F9ECEF",
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
        minWidth: 30,
        marginLeft: 0,
      },
    },
  })
);

import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
  createStyles({
    tableContainer: {
      background: '#FFFFFF',
      marginBottom: 10
    },
    label: {
      fontSize: 14,
      fontWeight: 700,
      color: '#333333',
      marginBottom: 9,
      lineHeight: '17px',
      marginTop: 0
    },
    tableHead: {
      "& > tr": {
        border: "1px solid #BDBDBD",
        "& > th": {
          border: "1px solid #BDBDBD",
          color: '#333333',
          fontSize: 14,
          fontWeight: 600,
          padding: 0,
          lineHeight: 2.5
        },
      },
    },
    tableBody: {
      '& .MuiTableCell-root': {
        overflowWrap: 'anywhere',
      },
      "& > tr": {
        height: 40,
        "& > td": {
          border: '1px solid #BDBDBD'
        },
        '& .MuiTableCell-root': {
          padding: 0
        }
      },
    },
    moreBtn: {
      borderColor: '#13BB37',
      '& .MuiButton-label': {
        color: "#13BB37",
      },
      '&:hover': {
        background: '#13BB3710'
      },
    },
    answerContent: {
      background: '#FAFAFA',
      '& > div': {
        paddingLeft: 10
      }
    },
    answerScore: {
      background: '#FAFAFA',
      '& > div': {
        maxWidth: 40,
      }
    }
  }))
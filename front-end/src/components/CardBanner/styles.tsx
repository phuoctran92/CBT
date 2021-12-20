import { createStyles, makeStyles } from '@material-ui/core/styles';
import Images from 'config/images';
import theme from 'config/theme';

export default makeStyles(() =>
  createStyles({
    container: {
      maxWidth: 345,
      height: '330px',
      borderRadius: '10px',
      borderBottom: `3px solid ${theme.bg}`,
      padding: '0px 0px 24px 0px',
      justify: 'space-between',
      margin: '10px 10px',
      backgroundColor: theme.bg,
      boxShadow: '4px 4px 20px rgba(48, 77, 149, 0.2)',
      transition: '0.5s',
      '&:hover': {
        transform: 'translate(0px, -3px)',
        boxShadow: '8px 8px 10px rgba(48, 77, 149, 0.3)',
        borderBottomColor: theme.mangoColor,
        cursor: 'pointer',
      },
    },
    photo: {
      borderRadius: '10px',
      height: '176px',
    },
    chipQuiz: {
      height: '176px',
      '& > div:last-child': {
        position: 'relative',
        padding: '2px 16px',
        color: theme.title,
        fontSize: '14px',
        fontWeight: 800,
        bottom: '40px',
        left: '20px',
        background: '#FD5A65'
      },
    },
    chipSurvey: {
      height: '176px',
      '& > div:last-child': {
        position: 'relative',
        padding: '2px 16px',
        color: theme.title,
        fontSize: '14px',
        fontWeight: 800,
        bottom: '40px',
        left: '20px',
        background: '#6988D7',
      },
    },
    chipDeal: {
      height: '176px',
      '& > div:last-child': {
        position: 'relative',
        padding: '2px 16px',
        color: theme.title,
        fontSize: '14px',
        fontWeight: 800,
        bottom: '40px',
        left: '20px',
        background: '#00D276',
      },
    },
    button: {
      margin: '8px 16px',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > .eye': {
        display: 'flex',
        alignItems: 'center',
        '& > img': {
          marginRight: '5px',
        },
        '& > p': {
          color: '#BDBDBD',
          fontSize: '14px',
          lineHeight: '1',
          fontWeight: 'bold',
        },
      },
      '& > .filter': {
        '& > button': {
          background: `url(${Images.icPencilLineCard}) center no-repeat;`,
          backgroundSize: 20,
          height: '24px',
          width: '24px',
        },
        '& > button:last-child': {
          background: `url(${Images.icDeleteCard}) center no-repeat;`,
          backgroundSize: 20,
          height: '24px',
          width: '24px',
        },
      },
    },
    containerContent: {
      margin: '-16px 8px 8px 8px',
      '& > .title': {
        margin: '0px 0px 4px',
        fontWeight: 'bold',
        weight: '800',
        fontSize: '14px',
      },
      '& > .description': {
        margin: '4px 0px 8px',
        wordBreak: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        lineHeight: '15px',
        fontSize: '12px',
        fontFamily: 'Montserrat',
        letterSpacing: '1px',
      },
      '& > div:nth-child(3)': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '& > div:nth-child(3) > p:first-child': {
        fontSize: '12px',
        LineHeight: '15px',
        color: '#BDBDBD',
        fontWeight: 'bold',
      },
      '& > div:nth-child(3) > p:last-child': {
        fontSize: '12px',
        LineHeight: '15px',
        color: '#BDBDBD',
        fontWeight: 'bold',
      },
    },
  })
);


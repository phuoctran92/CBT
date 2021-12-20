import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      overflow: "hidden",
    },
    menuleft:{

    },
    layout: {
      width:'-webkit-fill-available',
      overflow: 'auto',
      height: '100vh',
    },
    content: {
      padding: '25px 35px 0px 40px',
      minWidth: '800px'
    },
    
  }),
);

// export default useStyles;

import { memo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Grid, Button, Box } from '@material-ui/core';
import useStyles from './styles';
import Buttons from 'components/Buttons';
import { useHistory } from 'react-router-dom';
import { routes } from 'routers/routes';

interface popupPassResetProps {
  openDialogReset
  closeDialogReset

}

const PopupPassReset = memo((props: popupPassResetProps) => {
  const { openDialogReset, closeDialogReset } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => {
    closeDialogReset()
  }
  
  const handleBackLogin= () => {
    history.push(routes.login)
  }
  return (
    <Dialog
      open={openDialogReset}
      className={classes.container}
      onBackdropClick={ handleClose }
    >
      <Grid className={classes.containerDialog}>
        <Grid container justify="center" alignItems="center" className={classes.containerContent}>
          <DialogTitle>Password Reset request submitted</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Kindly check your email
            </DialogContentText>
          </DialogContent>
        </Grid>
        <Grid container justify="center" alignItems="center" className={classes.containerButton}>
          <Button onClick={handleClose}>
            Edit Email
          </Button>
          <Box width="208px">
            <Buttons btnType="large" onClick={handleBackLogin}>
              OK
            </Buttons>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
});
export default PopupPassReset;




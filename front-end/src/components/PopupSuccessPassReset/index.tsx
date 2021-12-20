import React, { memo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Grid, Box } from '@material-ui/core';
import useStyles from './styles';
import Buttons from 'components/Buttons';

interface popupPassResetSuccessProps {
  openDialogResetSuccess
  closeDialogResetSuccess,
  hiddenButton?: boolean

}

const PopupPassResetSuccess = memo((props: popupPassResetSuccessProps) => {
  const { openDialogResetSuccess, closeDialogResetSuccess, hiddenButton } = props;
  const classes = useStyles();
  const handleClose = () => {
    closeDialogResetSuccess()
  };
  return (
    <Dialog
      open={openDialogResetSuccess}
      onClose={handleClose}
      onBackdropClick={ handleClose }
      keepMounted
      className={classes.container}
    >
      <Grid className={classes.containerDialog}>
        <Grid container justify="center" alignItems="center" className={classes.containerContent}>
          <DialogTitle>Your password has been reset!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can login with your new password
            </DialogContentText>
          </DialogContent>
        </Grid>
        {
          !hiddenButton && (
            <Grid container justify="center" alignItems="center">
              <Box width="208px">
                <Buttons btnType="large" onClick={handleClose}>
                  Back to Login
                </Buttons>
              </Box>
            </Grid>
          )
        }
      </Grid>
    </Dialog>
  );
});
export default PopupPassResetSuccess;




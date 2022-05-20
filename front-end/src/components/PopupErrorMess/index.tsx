import { Box, Dialog, DialogTitle, Grid } from '@material-ui/core';
import Buttons from 'components/Buttons';
import images from 'config/images';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from 'store/reducers';
import * as actionGlobal from 'store/reducers/global/actionTypes';
import useStyles from './styles';

interface popupDeleteProps {
  messageLocal?: string,
  onClickCancel?: () => void
}

const PopupErrorMess = (props: popupDeleteProps) => {
  const { messageLocal, onClickCancel } = props;
  const messageError = useSelector((state: reducerType) => state.global.messageError)
  const messageSubError = useSelector((state: reducerType) => state.global.messageSubError)
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = () => {
    if (onClickCancel) {
      onClickCancel();
      return;
    }
    dispatch({
      type: actionGlobal.SET_MESSAGE_ERROR,
      payload: ''
    })
    dispatch({ type: actionGlobal.SET_MESSAGE_SUB_ERROR, payload: '' })
  };
  return (
    <Dialog
      open={!!messageError || !!messageLocal}
      onBackdropClick={handleClose}
      className={classes.container}
    >
      <Grid className={classes.containerDialog}>
        <Grid container justify="center" alignItems="center" className={classes.containerContent}>
          <img src={images.icError} alt="" />
          <DialogTitle className={classes.titleMess}>{messageError || messageLocal}</DialogTitle>
          {
            messageSubError && (<p className={classes.subTitle}>{messageSubError}</p>)
          }
        </Grid>
        <Grid container justify="center" alignItems="center" className={classes.containerButton}>
          <Box width="33%" >
            <Buttons onClick={handleClose}>
              Close
            </Buttons>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};
export default PopupErrorMess;




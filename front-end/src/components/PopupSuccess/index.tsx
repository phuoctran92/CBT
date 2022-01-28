import React, { memo } from 'react';
import { Dialog, Grid } from '@material-ui/core';
import Buttons from 'components/Buttons';
import useStyles from './styles';
import Images from 'config/images';

import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from 'store/reducers';
import * as actionGlobal from 'store/reducers/global/actionTypes';


interface PopupSuccessProps {
  messageLocal?: string,
  onClickCancel?: () => void
}


const PopupSuccess = memo((props: PopupSuccessProps) => {
  const { messageLocal, onClickCancel } = props;
  const messageSuccess = useSelector((state: reducerType) => state.global.messageSuccess)
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = () => {
    if (onClickCancel) {
      onClickCancel();
      return;
    }
    dispatch({
      type: actionGlobal.SET_MESSAGE_SUCCESS,
      payload: ''
    })
  };

  return (
    <Dialog
      open={!!messageSuccess || !!messageLocal}
      onBackdropClick={handleClose}
      className={classes.container}
    >
      <Grid className={classes.containerDialog}>
        <Grid container justify="center" alignItems="center" className={classes.containerContent}>
          <img alt="icon" src={Images.icSuccess} />
          <p>{messageSuccess || messageLocal}</p>
        </Grid>
        <Grid className={classes.containerButton}>
          <div>
            <Buttons onClick={handleClose}>OK</Buttons>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
});
export default PopupSuccess;




import { Dialog, Grid } from '@material-ui/core';
import Buttons from 'components/Buttons';
import ButtonsOutline from 'components/ButtonsOutline';
import Inputs from 'components/Inputs';
import InputsRichtext from 'components/InputsRichtext';
import Images from 'config/images';
import { memo } from 'react';
import useStyles from './styles';

//popupDeleteProps
interface PopupEditAnswerProps {
  onClickSuccess?: () => void,
  onClickCancel?: () => void,
  open: boolean,
}

const PopupEditAnswer = memo((props: PopupEditAnswerProps) => {
  const { onClickSuccess, onClickCancel, open } = props;
  const classes = useStyles();

  const handleSuccess = () => {
    onClickSuccess && onClickSuccess()
  }

  const handleClose = () => {
    onClickCancel && onClickCancel()
  }

  return (
    <Dialog
      open={open}
      keepMounted
      maxWidth="md"
      className={classes.dialog}
    >
      <Grid container spacing={2} className={classes.container}>
        <p className={classes.title}>Answer Edit</p>
        <Grid item md={12} >
          <InputsRichtext
            name="answer"
            title="Answer Content"
          />
        </Grid>
        <Grid item md={6} >
          <Inputs
            name="score"
            title='Score'
          />
        </Grid>
        <Grid item md={6} >
          <Inputs
            name="penaltyScore"
            title='Penalty Score'
          />
        </Grid>
        <Grid item md={12} >
          <InputsRichtext
            name="feedback"
            title="Feedback"
          />
        </Grid>
        <Grid item md={12} alignItems="center" className={classes.groupBtn}>
          <ButtonsOutline
            children='Cancel'
            onClick={handleClose}
            icon={Images.CBTicXred}
            placementIcon
          />
          <Buttons
            children='Confirm'
            onClick={handleSuccess}
            icon={Images.CBTicCheckWhite}
            placementIcon
          />
        </Grid>
      </Grid>
    </Dialog>
  );
});
export default PopupEditAnswer;




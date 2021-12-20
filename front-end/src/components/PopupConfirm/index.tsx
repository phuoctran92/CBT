import { memo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Grid, Button, Box } from '@material-ui/core';
import useStyles from './styles';
import Buttons from 'components/Buttons';
import Images from 'config/images';

//popupDeleteProps
interface popupConfirmProps {
  onClickSuccess?: () => void,
  onClickCancel?: () => void,
  title: string
  text: string,
  open: boolean,
  className?: any,
  type?: string,
}

const PopupConfirm = memo((props: popupConfirmProps) => {
  const { onClickSuccess, onClickCancel, title, text, open, className, type } = props;
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
      className={`${classes.container} ${className}`}
    >
      <Grid className={classes.containerDialog}>
        <Grid container justify="center" alignItems="center" className={classes.containerContent}>
          <DialogTitle><img alt="icon" src={Images.icQuestion} /></DialogTitle>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {text}
            </DialogContentText>
          </DialogContent>
        </Grid>
        <Grid container justify="center" alignItems="center" className={classes.containerButton}>
          <Buttons onClick={handleClose} btnType="medium"  >
            Cancel
          </Buttons>
          <Box onClick={handleSuccess} width="208px" ml="7px">
            <Button variant="outlined" color="secondary" size="large">
              Yes
            </Button>
          </Box>

        </Grid>
      </Grid>
    </Dialog>
  );
});
export default PopupConfirm;




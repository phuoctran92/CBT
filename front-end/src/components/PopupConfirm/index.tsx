import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Grid } from '@material-ui/core';
import Buttons from 'components/Buttons';
import ButtonsOutline from 'components/ButtonsOutline';
import Images from 'config/images';
import useStyles from './styles';

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

const PopupConfirm = (props: popupConfirmProps) => {
  const { onClickSuccess, onClickCancel, title, text, open, className } = props;
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
          <Buttons onClick={handleClose} >
            Cancel
          </Buttons>
          <Box onClick={handleSuccess} width="208px" ml="7px">
            <ButtonsOutline >
              Yes
            </ButtonsOutline>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};
export default PopupConfirm;




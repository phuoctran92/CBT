import { IconButton } from "@material-ui/core";
import clsx from 'clsx';
import useStyles from './styles';

interface ActionButtonProps {
  btnType: 'edit' | 'delete' | 'view' | 'share',
  onClick?: (e?: any) => void,
  disabled?: boolean
}

const ButtonAction = (props: ActionButtonProps) => {
  const classes = useStyles();
  const { disabled, btnType, onClick, ...rest } = props;
  return (
    <IconButton
      disabled={disabled}
      className={
        clsx(
          classes.root,
          btnType === 'view' ? classes.btnView : '',
          btnType === 'edit' ? classes.btnEdit : '',
          btnType === 'delete' ? classes.btnDelete : '',
          btnType === 'share' ? classes.btnShare : ''
        )
      }
      type="button"
      {...rest}
      onClick={onClick}

    >
      <div />
    </IconButton>
  )
};
export default ButtonAction;



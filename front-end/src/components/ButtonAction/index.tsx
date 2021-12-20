import { memo } from 'react';
import { IconButton } from "@material-ui/core";
import useStyles from './styles';
import clsx from 'clsx';

interface ActionButtonProps {
  btnType: 'edit' | 'delete' | 'view' | 'share',
  onClick?: (e?: any) => void,
  disabled?: boolean
}

const ButtonAction = memo((props: ActionButtonProps) => {
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
});
export default ButtonAction;



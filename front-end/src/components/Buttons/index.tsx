import React, { memo } from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import clsx from "clsx";

interface ButtonsProps {
  btnType?: string;
  children?: string;
  onClick?: (e?: any) => void;
  type?: any;
  icon?: any;
  placementIcon?: any;
  disabled?: boolean;
  className?: any
}

const Buttons = memo((props: ButtonsProps) => {
  const classes = useStyles();
  const { className, placementIcon, icon, btnType, children, onClick, ...rest } = props;
  return (
    <Button
      className={clsx(
        classes.root, className,
        btnType === "large" ? classes.btnLarge : "",
        btnType === "medium" ? classes.btnMedium : "",
        btnType === "small" ? classes.btnSmall : "",
        btnType === "icon" ? classes.btnIcon : "",
        btnType === "iconSmall" ? classes.btnIconSmall : "",
      )}
      type="button"
      {...rest}
      onClick={onClick}
      endIcon={placementIcon ? <img src={icon} alt="" /> : ""}
      startIcon={placementIcon ? "" : <img src={icon} alt="" />}
    >
      {children}
    </Button>
  );
});
export default Buttons;

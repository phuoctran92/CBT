import React, { memo } from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import clsx from "clsx";

interface ButtonsOutlinedProps {
  btnType?: string;
  children: string;
  onClick?: (e?: any) => void;
  icon?: any;
  placementIcon?: any;
}

const ButtonsOutlined = memo((props: ButtonsOutlinedProps) => {
  const classes = useStyles();
  const { placementIcon, icon, btnType, children, onClick, ...rest } = props;
  return (
    <Button
      className={clsx(
        classes.root,
        btnType === "large" ? classes.btnLarge : "",
        btnType === "medium" ? classes.btnMedium : "",
        btnType === "small" ? classes.btnSmall : "",
        btnType === "icon" ? classes.btnIcon : "",
      )}
      variant="outlined"
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
export default ButtonsOutlined;

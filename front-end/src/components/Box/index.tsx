import { Button } from "@material-ui/core";
import { memo } from "react";
import useStyles from "./styles";

interface BoxProps {
  icon: any;
  number?: number;
  title: string;
  type?: boolean; //type is a Action Box (true) or Info Box (false, defalut)
  onClick?: () => void;
}

const Box = memo((props: BoxProps) => {

  const classes = useStyles();

  const { icon, title, number, type, onClick } = props;

  return (
    <div className={!type ? classes.boxF : classes.boxT}>
      <Button onClick={onClick} className={!type ? classes.item1F : classes.item1T} >
        <img src={icon} alt="" />
      </Button>
      {!type ?
        <div className={classes.item2F}>
          <div className={classes.number}>
            {number ? number : 0}
          </div>
          <div className={classes.title}>
            {title}
          </div>
        </div> :

        <div className={classes.item2T}>
          {title}
        </div>
      }
    </div>
  );
});
export default Box;

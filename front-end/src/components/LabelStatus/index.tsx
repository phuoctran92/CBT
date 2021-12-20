import { memo } from "react";
import useStyles from "./styles";
import clsx from "clsx";
interface LabelStatusProps {
  typeStatus: string,
  TextCustom?: string
}

const LabelStatus = memo((props: LabelStatusProps) => {
  const statusLabel = () => {
    switch (typeStatus) {
      case "Active":
        return "Active";
      case "Publish":
        return "Publish";
      case "InActive":
        return "InActive";
      case "Activated":
        return "Activated";
      case "Deactivated":
        return "Deactivated";
      case "Draft":
        return "Draft";
      case "closed":
        return "Closed";
      case "closed-deal":
        return "Closed";
      case "open":
        return "Open";
      case "open-deal":
        return "Open";
      case "canceled":
        return "Canceled";
      case "successed":
        return "Successed";
      case "success":
        return "Success";
      case "published":
        return "Published";
      case "pending":
        return "Pending";
      case "completed":
        return "Completed";
      default: return typeStatus;
    }
  };
  const classes = useStyles();
  const { typeStatus, ...rest } = props;
  const _typeStatus = typeStatus.toLocaleLowerCase();
  return (
    <div
      className={clsx(
        _typeStatus === "active" ? classes.circleGreen : "",
        _typeStatus === "activated" ? classes.circleGreen : "",
        _typeStatus === "publish" ? classes.circleGreen : "",
        _typeStatus === "inactive" ? classes.checkCircle : "",
        _typeStatus === "deactivated" ? classes.circleGray : "",
        _typeStatus === "draft" ? classes.checkCircle : "",
        _typeStatus === "closed" ? classes.circlePink : "",
        _typeStatus === "rejected" ? classes.circleGray : "",
        _typeStatus === "closed-deal" ? classes.circleGray : "",
        _typeStatus === "open" ? classes.circleYellow : "",
        _typeStatus === "accepted" ? classes.circleGreen : "",
        _typeStatus === "open-deal" ? classes.circleGreen : "",
        _typeStatus === "canceled" ? classes.circlePink : "",
        _typeStatus === "successed" ? classes.circleGreen : "",
        _typeStatus === "success" ? classes.circleGreen : "",
        _typeStatus === "failed" ? classes.circlePink : "",
        _typeStatus === "published" ? classes.circleGreen : "",
        _typeStatus === "pending" ? classes.circleYellow : "",
        _typeStatus === "completed" ? classes.circleGreen : "",
        _typeStatus === "bronze" ? classes.tierBronze : "",
        _typeStatus === "silver" ? classes.tierSilver : "",
        _typeStatus === "gold" ? classes.tierGold : "",
        _typeStatus === "platinum" ? classes.tierPlatinum : "",
      )
      }
      {...rest}
    >
      {props?.TextCustom || statusLabel()}
    </div >
  );
});
export default LabelStatus;

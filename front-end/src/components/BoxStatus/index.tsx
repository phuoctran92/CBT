import { memo } from "react";
import useStyles from "./styles";
import clsx from "clsx";

interface BoxStatusProps {
  typeStatus: string;
}

const BoxStatus = memo((props: BoxStatusProps) => {
  const statusLabel = () => {
    switch (typeStatus) {
      case "Success":
        return "Success";
      case "Processing":
        return "Processing";
      case "cancel":
        return "Canceled";
      case "published":
        return "Published";
      case "waiting":
        return "Waiting";
      default:
    }
  };
  const classes = useStyles();
  const { typeStatus, ...rest } = props;
  return (
    <div
      className={clsx(
        typeStatus === "Success" ? classes.successStatus : "",
        typeStatus === "Processing" ? classes.processStatus : "",
        typeStatus === "cancel" ? classes.cancelStatus : "",
        typeStatus === "published" ? classes.successStatus : "",
        typeStatus === "waiting" ? classes.processStatus : "",
        classes.boxStatus
      )}
      {...rest}
    >
      {statusLabel()}
    </div>
  );
});
export default BoxStatus;

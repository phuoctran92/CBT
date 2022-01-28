import { memo } from "react";
import useStyles from "./styles";
import clsx from "clsx";
import { QuestionStatus } from "models/question"

interface QuestionLabelStatusProps {
  typeStatus: string
}

const QuestionLabelStatus = memo((props: QuestionLabelStatusProps) => {
  const classes = useStyles();
  const { typeStatus, ...rest } = props;

  return (
    <div
      className={clsx(
        typeStatus === QuestionStatus.Draft ? classes.circleYellow : "",
        typeStatus === QuestionStatus.Published ? classes.circleGreen : "",
      )
      }
      {...rest}
    >
      {typeStatus}
    </div >
  );
});
export default QuestionLabelStatus;

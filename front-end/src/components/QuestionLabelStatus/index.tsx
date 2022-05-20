import clsx from "clsx";
import { QuestionStatus } from "models/question";
import useStyles from "./styles";

interface QuestionLabelStatusProps {
  typeStatus: string
}

const QuestionLabelStatus = (props: QuestionLabelStatusProps) => {
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
};
export default QuestionLabelStatus;

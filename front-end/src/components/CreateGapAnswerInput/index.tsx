import { Typography } from '@material-ui/core';
import { MatchingAnswer } from "modules/Question/Create/components/Matching/models";
import Editor from './Editor';
import useStyles from './styles';

interface CreateGapAnswerInputProps {
  title?: string,
  placeholder?: string,
  name: string,
  onChangeQuestion: any,
  question: any,
  className: string,
  answer: MatchingAnswer[],
  onChangeAnswer: Function
}

const CreateGapAnswerInput = (props: CreateGapAnswerInputProps) => {
  const classes = useStyles();
  const { title, question, onChangeQuestion, placeholder, className, answer, onChangeAnswer } = props;

  return (
    <div className={classes.container}>
      <Typography className={classes.textTitle}>{title}</Typography>
      <Editor
        question={question}
        onChangeQuestion={onChangeQuestion}
        placeholder={placeholder || ""}
        className={className}
        answer={answer}
        onChangeAnswer={onChangeAnswer}
      />
    </div>
  );
};

export default CreateGapAnswerInput;




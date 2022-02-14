import { Collapse, Dialog, FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { memo, useState } from "react";
import { SelectOneQuestion } from '../models';
import useStyles from "./styles";

interface SelectOnePreviewProps {
  open: boolean,
  question: SelectOneQuestion,
  onClose: Function
}

const SelectOnePreview = memo((props: SelectOnePreviewProps) => {
  const { open, question, onClose } = props
  const classes = useStyles()
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      maxWidth="md"
      className={classes.dialog}
    >
      <div className={classes.container}>
        <p className={classes.title}>{`Title : ${question.questionTitle || "-"} `}</p>
        <p
          className={classes.feedbackBtn}
          onClick={() => setShowFeedback(!showFeedback)}
        >Show Feedback</p>
        <p className={classes.questionNum}>Question 1</p>
        <FormControl component="fieldset" >
          <div dangerouslySetInnerHTML={{ __html: question.questionContent }}></div>
          <RadioGroup
            aria-label="question"
            name="question-detail"
            value={null}
            className={classes.answers}
          >
            {
              question.answers.map((answer, index) => {
                return (
                  <>
                    <FormControlLabel
                      key={index}
                      control={
                        <Radio
                          checked={answer.isCorrect}
                          color="primary"
                        />
                      }
                      label={answer.answerContent || "-"}
                    />
                    <Collapse className={classes.feedback} in={showFeedback}>
                      <Alert severity={answer.isCorrect ? "success" : "error"}>
                        <div dangerouslySetInnerHTML={{ __html: answer.feedback }}></div>
                      </Alert>
                    </Collapse>
                  </>
                )
              }
              )
            }
          </RadioGroup>
        </FormControl>
      </div>
    </Dialog>
  )
});

export default SelectOnePreview
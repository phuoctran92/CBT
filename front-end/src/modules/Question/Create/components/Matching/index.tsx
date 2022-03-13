import {
  Checkbox, Chip, Grid, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TextField
} from "@material-ui/core";
import ButtonAction from "components/ButtonAction";
import ButtonsOutline from "components/ButtonsOutline";
import CategoriesSelect from "components/CategoriesSelect";
import Inputs from "components/Inputs";
import CreateGapAnswerInput from "components/CreateGapAnswerInput";
import PopupEditAnswer from "components/PopupEditAnswer";
import Images from 'config/images';
import produce from "immer";
import { memo, useState } from "react";
import { headerOption, MatchingQuestion, MatchingAnswer } from './models';
import MatchingPreview from "./MatchingPreview";
import useStyles from "./styles";

const categoryOptions = [
  { value: "ielts", label: "IELTS" },
  { value: "toeic", label: "TOEIC" },
  { value: "general", label: "General" }
]
interface MatchingProps {
  preview: boolean,
  onClosePreview: Function
}

const Matching = memo((props: MatchingProps) => {
  const { preview, onClosePreview } = props
  const classes = useStyles()
  const [openEdit, setOpenEdit] = useState(false)
  const [answerId, setAnswerId] = useState(0)

  const initialQuestion: MatchingQuestion =
  {
    questionTitle: '',
    category: "",
    questionContent: "",
    answers: []
  }

  const [question, setQuestion] = useState<MatchingQuestion>(initialQuestion)
  const handleClosePreview = () => {
    onClosePreview()
  }
  const handleChangeQuestionContent = (data) => {
    setQuestion(
      produce(draft => {
        draft.questionContent = data
      })
    )
  }
  const handleChangeQuestionTitle = (e) => {
    setQuestion(
      produce(draft => {
        draft.questionTitle = e.target.value
      })
    )
  }
  const handleChangeCategory = (e) => {
    setQuestion(
      produce(draft => {
        draft.category = e
      })
    )
  }

  const handleChangeAnswerScore = (index: number) => (event) => {
    setQuestion(
      produce(draft => {
        draft.answers[index].score = event.target.value
      })
    )
  }
  const handleChangeAnswerPenaltyScore = (index: number) => (event) => {
    setQuestion(
      produce(draft => {
        draft.answers[index].penaltyScore = event.target.value
      })
    )
  }
  const handleEditAnswer = (index: number) => () => {
    setAnswerId(index)
    setOpenEdit(true)
  }


  const handleAddAnswer = () => {
    setQuestion(
      produce(draft => {
        draft.answers = [...draft.answers, {
          displayOrder: 0,
          answerContent: "",
          score: "0",
          penaltyScore: "0",
          isCorrect: false,
          feedback: ""
        }]
      }))
  }
  const handleChangeAnswer = (data) => {
    setQuestion(
      produce(draft => {
        draft.answers = data
      }))
  }

  const handleChangeAdvanceAnswer = (data) => {
    setOpenEdit(false)
    setQuestion(
      produce(draft => {
        draft.answers[answerId] = data
      })
    )
  }

  return (
    <Grid container className={classes.container}>
      <Grid item md={9} >
        <Inputs
          onChange={handleChangeQuestionTitle}
          defaultValue={question.questionTitle}
          name="questionTitle"
          title="Question Title"
          placeholder="Insert question title here..."
          multiline
        />
      </Grid>
      <Grid item md={3} >
        <CategoriesSelect
          name="category"
          label="Category"
          options={categoryOptions}
          placeholder="Category"
          onChange={handleChangeCategory}
        />
      </Grid>
      <Grid item md={12} >
        <CreateGapAnswerInput
          className="question-content"
          onChangeQuestion={handleChangeQuestionContent}
          name="questionContent"
          title="Question Content"
          placeholder="Insert question content here..."
          question={question.questionContent}
          answer={question.answers}
          onChangeAnswer={handleChangeAnswer}
        />
      </Grid>
      <Grid container >
        <p className={classes.label}>Answer</p>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow>
                {headerOption?.map((option, index) =>
                  <TableCell align="center" style={{ minWidth: option.width }} key={index}>
                    {option.name}
                  </TableCell>)}
                <TableCell align="center" style={{ minWidth: 50 }}>
                  Feedback
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {question.answers?.map((row, index) => {
                return (
                  <TableRow
                    key={`answer-${index}`}
                  >
                    <TableCell align="center">{index}</TableCell>
                    <TableCell className={classes.answerContent} >
                      <p>{row.answerContent}</p>
                    </TableCell>
                    <TableCell align="center" className={classes.answerScore}>
                      <TextField
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                        value={row.score}
                        onChange={handleChangeAnswerScore(index)}
                      />
                    </TableCell>
                    <TableCell align="center" className={classes.answerScore}>
                      <TextField
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                        value={row.penaltyScore}
                        onChange={handleChangeAnswerPenaltyScore(index)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        readOnly
                        checked={row.isCorrect}
                        color="primary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ButtonAction
                        btnType="edit"
                        onClick={handleEditAnswer(index)} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonsOutline
          className={classes.moreBtn}
          children="More Option"
          icon={Images.CBTicPlusCircleGreen}
          placementIcon={true}
          onClick={handleAddAnswer}
        />
        {openEdit && <PopupEditAnswer
          answer={question.answers[answerId]}
          open={openEdit}
          onClickCancel={() => setOpenEdit(false)}
          onClickSuccess={handleChangeAdvanceAnswer}
        />}
        <MatchingPreview
          open={preview}
          question={question}
          onClose={handleClosePreview}
        />
      </Grid>
    </Grid>
  )
});

export default Matching
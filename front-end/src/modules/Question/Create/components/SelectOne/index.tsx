import {
  Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TextField
} from "@material-ui/core";
import ButtonAction from "components/ButtonAction";
import ButtonsOutline from "components/ButtonsOutline";
import CategoriesSelect from "components/CategoriesSelect";
import Inputs from "components/Inputs";
import InputsRichtext from "components/InputsRichtext";
import PopupEditAnswer from "components/PopupEditAnswer";
import Images from 'config/images';
import produce from "immer";
import { memo, useState } from "react";
import { headerOption, SelectOneQuestion } from './models';
import SelectOnePreview from "./SelectOnePreview";
import useStyles from "./styles";

const categoryOptions = [
  { value: "ielts", label: "IELTS" },
  { value: "toeic", label: "TOEIC" },
  { value: "general", label: "General" }
]
interface SelectOneProps {
  preview: boolean,
  onClosePreview: Function
}

const SelectOne = memo((props: SelectOneProps) => {
  const { preview, onClosePreview } = props
  const classes = useStyles()
  const [openEdit, setOpenEdit] = useState(false)
  const [answerId, setAnswerId] = useState(0)

  const initialQuestion: SelectOneQuestion =
  {
    questionTitle: '',
    category: "",
    questionContent: "",
    answers: [
      {
        displayOrder: 0,
        answerContent: "",
        score: "100",
        penaltyScore: "0",
        isCorrect: true,
        feedback: ""
      },
      {
        displayOrder: 0,
        answerContent: "",
        score: "0",
        penaltyScore: "0",
        isCorrect: false,
        feedback: ""
      }
    ]
  }

  const [question, setQuestion] = useState<SelectOneQuestion>(initialQuestion)
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

  const handleChangeAnswerContent = (index: number) => (event) => {
    setQuestion(
      produce(draft => {
        draft.answers[index].answerContent = event.target.value
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
  const handleChangeCorrectAnswer = (index: number) => (event) => {
    setQuestion(
      produce(draft => {
        if (!draft.answers[index].isCorrect) {
          draft.answers[index].isCorrect = event.target.checked;
          for (let i = 0; i < draft.answers.length; i++) {
            if (i !== index) {
              draft.answers[i].isCorrect = false;
            }
          }
        }
      })
    )
  }
  const handleEditAnswer = (index: number) => () => {
    setAnswerId(index)
    setOpenEdit(true)
  }
  const handleRemoveAnswer = (index: number) => () => {
    console.log(index);

    setQuestion(
      produce(draft => {
        draft.answers.splice(index, 1)
      })
    )
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
        <InputsRichtext
          onChange={handleChangeQuestionContent}
          name="questionContent"
          title="Question Content"
          placeholder="Insert question content here..."
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
                <TableCell align="center" style={{ minWidth: 80 }}>
                  ADVANCE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {question.answers?.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                  >
                    <TableCell align="center">{index}</TableCell>
                    <TableCell className={classes.answerContent} >
                      <TextField
                        fullWidth
                        multiline
                        InputProps={{
                          disableUnderline: true,
                        }}
                        value={row.answerContent}
                        onChange={handleChangeAnswerContent(index)}
                      />
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
                    <TableCell align="center">
                      <Checkbox
                        checked={row.isCorrect}
                        onChange={handleChangeCorrectAnswer(index)}
                        color="primary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ButtonAction
                        btnType="edit"
                        onClick={handleEditAnswer(index)} />
                      <ButtonAction
                        btnType="delete"
                        onClick={handleRemoveAnswer(index)} />
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
        <SelectOnePreview
          open={preview}
          question={question}
          onClose={handleClosePreview}
        />
      </Grid>
    </Grid>
  )
});

export default SelectOne
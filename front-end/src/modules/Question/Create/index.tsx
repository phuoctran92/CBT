import {
  Avatar, Grid
} from "@material-ui/core"
import BreadcrumbsCustom from "components/BreadcrumbsCustom"
import Buttons from "components/Buttons"
import QuestionTypeSelect from "components/QuestionTypeSelect"
import Images from "config/images"
import { memo, useState } from "react"
import Dropdown from './components/Dropdown'
import Essay from './components/Essay'
import FillInGaps from './components/FillInGaps'
import Matching from './components/Matching'
import SelectMany from './components/SelectMany'
import SelectOne from './components/SelectOne'
import useStyles from "./styles"
import { FormProvider, useForm } from 'react-hook-form';

const CreateQuestion = memo(() => {
  const methods = useForm({
    defaultValues: {
      questionTitle: '',
      category: "",
      questionContent: "",
      answers: [
        {
          displayOrder: 0,
          answerContent: "",
          score: 100,
          penaltyScore: 0,
          isCorrect: true,
          feedback: ""
        },
        {
          displayOrder: 1,
          answerContent: "",
          score: 100,
          penaltyScore: 0,
          isCorrect: false,
          feedback: ""
        }
      ]
    }
  })
  const classes = useStyles()
  const [type, setType] = useState(0)
  const [preview, setPreview] = useState(false)
  const handleClosePreview = () => {
    setPreview(false)
  }

  const renderQuestionForm = (type: number) => {
    switch (type) {
      case 0:
        return <SelectOne
          preview={preview}
          onClosePreview={handleClosePreview}
        />;
      case 1:
        return <SelectMany
          preview={preview}
          onClosePreview={handleClosePreview}
        />;
      case 2:
        return <Matching
          preview={preview}
          onClosePreview={handleClosePreview}
        />;
      case 3:
        return <Dropdown />;
      case 4:
        return <FillInGaps />;
      case 5:
        return <Essay />;
      default:
        return null;
    }
  }
  const handleChangeType = (e) => {
    setType(e)
  }

  return (
    <Grid container className={classes.container}>
      <Grid item md={12} className={classes.header}>
        <BreadcrumbsCustom
          name="Question Bank"
          icon={Images.CBTicFileTextRed}
          link1="Question"
          link2="Create"
        />
        <div className={classes.avatar}>
          <p>Hi! Julia Falling on you</p>
          <Avatar />
        </div>
      </Grid>
      <QuestionTypeSelect
        type={type}
        onChange={handleChangeType}
      />
      <FormProvider {...methods}>
        <form autoComplete="off">
          <Grid container className={classes.content}>
            {
              renderQuestionForm(type)
            }
            <Grid item md={12} className={classes.groupBtn}>
              <Buttons
                children="Preview"
                icon={Images.CBTicEyeWhite}
                placementIcon={true}
                onClick={() => setPreview(true)}
              />
              <Buttons
                children="Save As Draft"
                icon={Images.CBTicFileArrowDown}
                placementIcon={true}
              />
              <Buttons
                children="Publish"
                icon={Images.CBTicPlusCircleWhite}
                placementIcon={true}
              />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Grid>
  )
});

export default CreateQuestion
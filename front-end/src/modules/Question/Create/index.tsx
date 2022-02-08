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

const renderQuestionForm = (type: number) => {
  switch (type) {
    case 0:
      return <SelectOne />;
    case 1:
      return <SelectMany />;
    case 2:
      return <Matching />;
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

const CreateQuestion = memo(() => {
  const classes = useStyles()
  const [type, setType] = useState(0)

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
      <Grid container className={classes.content}>
        {
          renderQuestionForm(type)
        }
        <Grid item md={12} className={classes.groupBtn}>
          <Buttons
            children="Preview"
            icon={Images.CBTicEyeWhite}
            placementIcon={true}
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
    </Grid>
  )
});

export default CreateQuestion
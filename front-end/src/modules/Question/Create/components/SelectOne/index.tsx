import { Grid } from "@material-ui/core"
import CategoriesSelect from "components/CategoriesSelect";
import Inputs from "components/Inputs";
import Buttons from "components/Buttons";
import InputsRichtext from "components/InputsRichtext";
import { memo } from "react"
import SelectOneAnswerForm from "./SelectOneAnswerForm";
import useStyles from "./styles"
import Images from 'config/images'

const categoryOptions = [
  { value: "ielts", label: "IELTS" },
  { value: "toeic", label: "TOEIC" },
  { value: "general", label: "General" }
]

const SelectOne = memo(() => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item md={9} >
        <Inputs
          name="title"
          title="Question Title"
          placeholder="Insert question title here..."
        />
      </Grid>
      <Grid item md={3} >
        <CategoriesSelect
          name="category"
          label="Category"
          options={categoryOptions}
          placeholder="Category"
        />
      </Grid>
      <Grid item md={12} >
        <InputsRichtext
          name="content"
          title="Question Content"
          placeholder="Insert question content here..."
        />
      </Grid>
      <Grid item md={12} >
        <SelectOneAnswerForm />
      </Grid>
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
  )
});

export default SelectOne
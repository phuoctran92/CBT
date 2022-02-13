import { Grid } from "@material-ui/core";
import CategoriesSelect from "components/CategoriesSelect";
import Inputs from "components/Inputs";
import InputsRichtext from "components/InputsRichtext";
import { memo } from "react";
import useStyles from "./styles";

const Essay = memo(() => {
  const classes = useStyles()
  const categoryOptions = [
    { value: "ielts", label: "IELTS" },
    { value: "toeic", label: "TOEIC" },
    { value: "general", label: "General" }
  ]

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
          onChange={() => { }}
          name="content"
          title="Question Content"
        />
      </Grid>
      <Grid item md={12}>
        <InputsRichtext
          onChange={() => { }}
          name="answer"
          title="Answer Content"
        />
      </Grid>
      <Grid item md={12}>
        <InputsRichtext
          onChange={() => { }}
          name="gradingGuide"
          title="Grading Guide"
        />
      </Grid>
    </Grid>
  )
});

export default Essay
import {
  Avatar, Grid
} from "@material-ui/core"
import BreadcrumbsCustom from "components/BreadcrumbsCustom"
import QuestionTypeSelect from "components/QuestionTypeSelect"
import Images from "config/images"
import { memo } from "react"
import { Switch } from "react-router-dom"
import { routes } from "routers/routes"
import Dropdown from './components/Dropdown'
import Essay from './components/Essay'
import FillInGaps from './components/FillInGaps'
import Matching from './components/Matching'
import SelectMany from './components/SelectMany'
import SelectOne from './components/SelectOne'
import PermissionRoute from "./PermissionRoute"
import useStyles from "./styles"


const CreateQuestion = memo(() => {
  const classes = useStyles()

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
      <QuestionTypeSelect />
      <Switch>
        <PermissionRoute exact isPermission={true} component={SelectOne} urlRedirect={routes.login} path={routes.question.create.selectOne} />
        <PermissionRoute exact isPermission={true} component={SelectMany} urlRedirect={routes.login} path={routes.question.create.selectMany} />
        <PermissionRoute exact isPermission={true} component={Matching} urlRedirect={routes.login} path={routes.question.create.matching} />
        <PermissionRoute exact isPermission={true} component={Dropdown} urlRedirect={routes.login} path={routes.question.create.dropdown} />
        <PermissionRoute exact isPermission={true} component={FillInGaps} urlRedirect={routes.login} path={routes.question.create.fillGaps} />
        <PermissionRoute exact isPermission={true} component={Essay} urlRedirect={routes.login} path={routes.question.create.essay} />
      </Switch>
    </Grid>
  )
});

export default CreateQuestion
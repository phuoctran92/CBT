import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Fragment } from "react";
import { navs } from './models';
import useStyles from "./styles";

interface QuestionTypeSelectProps {
  onChange: Function,
  type: number
}

const QuestionTypeSelect = (props: QuestionTypeSelectProps) => {
  const { onChange, type } = props
  const classes = useStyles();

  const getMenus = () => {
    let _menuItems = [...navs];
    return _menuItems;
  }

  const handleChangeType = (i: number) => () => {
    onChange(i)
  }
  return (
    <div className={classes.container}>
      <p>Question Type</p>
      <div className={classes.list}>
        <List>
          {getMenus().map((route, i) => (
            <Fragment key={i}>
              <ListItem
                className={classes.listWrap}
                selected={type === i}
                onClick={handleChangeType(i)}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItem>
            </Fragment>
          ))}
        </List>
      </div>
    </div>
  );
};

export default QuestionTypeSelect;

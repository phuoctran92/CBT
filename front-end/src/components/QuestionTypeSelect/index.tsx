import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { navs } from './models';
import useStyles from "./styles";

const QuestionTypeSelect = () => {
  const classes = useStyles();
  const history = useHistory();
  const pathName = history.location.pathname;

  const getMenus = () => {
    let _menuItems = [...navs];
    return _menuItems;
  }

  const checkActiveMenu = (item) => {
    return pathName.includes(`${item.path}`)
  }

  return (
    <div className={classes.container}>
      <p>Question Type</p>
      <div className={classes.list}>
        <List>
          {getMenus().map((route, i) => (
            <Fragment key={`router-${i}`}>
              <ListItem
                className={classes.listWrap}
                component={Link}
                to={route.path}
                selected={checkActiveMenu(route)}
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

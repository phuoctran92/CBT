import { Fragment } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import useStyles from "./styles";
import Images from "config/images";
import { Link, useHistory } from "react-router-dom";
import { navs } from './models';
import { routes } from 'routers/routes'

const MenuLeft = () => {
  const classes = useStyles();
  const history = useHistory();
  const pathName = history.location.pathname;

  const handleLogout = async () => {
    localStorage.clear();
    const url = routes.login;
    window.location.href = window.location.origin + url;
  };

  const getMenus = () => {
    let _menuItems = [...navs];
    return _menuItems;
  }

  const checkActiveMenu = (item) => {
    return pathName.includes(`${item.path}`)
  }

  return (
    <div className={classes.container}>
      <Grid className={classes.toolbar}>
        <Grid className={classes.logo}>
          <img src={Images.icLogo} alt="logo menu" />
        </Grid>
        <div className={classes.list}>
          <div>
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
        <Link to='#' onClick={handleLogout} style={{ textDecoration: "none" }}>
          <Grid className={classes.containerLogout}>
            <img src={Images.icLogout} alt="" />
            <p>Log Out</p>
          </Grid>
        </Link>
      </Grid>
    </div>
  );
};

export default MenuLeft;

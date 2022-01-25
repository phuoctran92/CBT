// import { lazy } from 'react';

import useStyles from './styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'routers/routes'
import MenuLeft from 'components/MenuLeft';

import PermissionRoute from './PermissionRoute';
import { reducerType } from 'store/reducers';
import { useSelector } from 'react-redux'

function MasterLayout() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuLeft />
      <div className={classes.layout}>
        <main className={classes.content}>
          <Switch>
            <Redirect exact from={routes.default} to={routes.workspace} />
          </Switch>
        </main>
      </div>
    </div>
  );

}
export default MasterLayout;

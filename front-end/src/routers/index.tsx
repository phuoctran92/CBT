import { lazy, Suspense, memo } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'
import PrivateRoute from './PrivateRoute'
import LoadingFullPage from 'components/LoadingFullPage'

import { reducerType } from 'store/reducers';
import { useSelector } from 'react-redux'

const Authentication = lazy(() => import('modules/Authentication'));

const MasterLayout = lazy(() => import('modules/MasterLayout'));
const GuiUI = lazy(() => import('modules/GuiUI'));

interface IRoutes {
  isLoggedIn: boolean
}

const Routes = memo((props: IRoutes) => {

  return (
    <Suspense fallback={<LoadingFullPage isShow={true} />}>
      <Switch>
        <Redirect exact from={routes.default} to={routes.login} />
        <PrivateRoute exact isLoggedIn={!props.isLoggedIn} urlRedirect={routes.default} path={routes.login} component={Authentication} />
      </Switch>
    </Suspense>)
})

export default Routes

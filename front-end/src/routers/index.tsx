import LoadingFullPage from 'components/LoadingFullPage'
import { lazy, Suspense } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { routes } from './routes'

const Authentication = lazy(() => import('modules/Authentication'));
const MasterLayout = lazy(() => import('modules/MasterLayout'));

interface IRoutes {
  isLoggedIn: boolean
}

const Routes = (props: IRoutes) => {

  return (
    <Suspense fallback={<LoadingFullPage isShow={true} />}>
      <Switch>
        <Redirect exact from={routes.default} to={props.isLoggedIn ? routes.question.default : routes.login} />
        <PrivateRoute
          exact
          isLoggedIn={!props.isLoggedIn}
          urlRedirect={routes.default}
          path={routes.login}
          component={Authentication}
        />
        <PrivateRoute
          path={routes.default}
          urlRedirect={routes.login}
          component={MasterLayout}
          isLoggedIn={props.isLoggedIn}
        />
      </Switch>
    </Suspense>)
}

export default Routes

import { useForm } from "react-hook-form"
import { Grid, Box, Button, IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import useStyles from "./styles";
import Inputs from "components/Inputs";
import Images from "config/images";
import { routes } from 'routers/routes';
import * as authenticationServices from 'services/authentication';
import * as actionGlobal from 'store/reducers/global/actionTypes';
import { ACCESS_TOKEN } from 'config/constants';
import { setToken } from 'services/configApi';

// import { FormLoginSocial } from 'models/authentication';
// import { TypeLoginSocial } from './models';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleSubmit, register, formState: { errors } } = useForm();

  const validateError = (value) => {
    if (value.length < 6) {
      return `Password must be at least 6 characters`
    }
    if (value.length > 50) {
      return `Maximum of 50 characters`
    }
  }

  const onSubmit = async (values) => {
    dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: true })
    await authenticationServices
      .login(values)
      .then((res) => {
        // const dataToken = parseJwt(res.data.token)
        localStorage.setItem(ACCESS_TOKEN, res.data.token);
        setToken(res.data.token);
        history.push(routes.default);
      })
      .catch((e) => {
        dispatch({
          type: actionGlobal.SET_MESSAGE_ERROR,
          payload: e.message
        })
      })
      .finally(() => {
        dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: false })
      })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <img src={Images.icLogo} alt="" className={classes.icLogo} />
      <Grid container className={classes.rabbit}>
        <Grid className={classes.title}>
          <span>Log In</span>
          <span>Glad to see you!</span>
        </Grid>
        {
          errors?.userNameOrEmailAddress?.message || errors?.password?.message
            ? <Box className={classes.icRabbitInvalid}>
              <img src={Images.icRabbitInvalid} alt="icon" />
            </Box>
            :
            <Box className={classes.icRabbit}>
              <img src={Images.icRabbit} alt="icon" />
              <img src={Images.icHi} alt="icon" />
            </Box>
        }
      </Grid>
      <Grid container className={classes.input}>
        <Box width="354px">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Inputs
              placeholder="Email"
              name="username"
              autoComplete="new-password"
              className={
                clsx({
                  [classes.disabled]: true,
                  [classes.inputError]: !!errors?.userNameOrEmailAddress?.message,
                })
              }
              showIcon={true}
              img={Images.icEmail}
              inputRef={register("email", { required: 'Email cannot be empty' })}
              errorMessage={errors?.userNameOrEmailAddress ? errors.userNameOrEmailAddress.message : null}
            />
            <Inputs
              placeholder="Password"
              type="password"
              name="password"
              showEyes={true}
              autoComplete="new-password"
              className={
                clsx({
                  [classes.disabled]: true,
                  [classes.inputError]: !!errors?.password?.message,
                })
              }
              showIcon={true}
              img={Images.icPass}
              inputRef={register("password", {
                required: 'Password cannot be empty',
                validate: value => validateError(value)
              })}
              errorMessage={errors?.password ? errors.password.message : null}
            />
            <Link className={classes.href} to="/forgot-password">Forgot your password?</Link>
            <Button type="submit" className={classes.btn}>Login</Button>
          </form>
          <div className={classes.separator}>
            <span>or</span>
          </div>
          <Grid className={classes.brand}>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_KEY!}
              render={(renderProps: any) => (
                <IconButton onClick={renderProps.onClick}><img src={Images.icGoogle} alt="" /></IconButton>
              )}
              //onSuccess={responseData(TypeLoginSocial.GOOGLE)}
              autoLoad={false}
              //onFailure={responseData(TypeLoginSocial.GOOGLE)}
              cookiePolicy={'single_host_origin'}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

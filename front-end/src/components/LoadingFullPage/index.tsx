import { CircularProgress } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

interface ILoadingFullPage {
  isFullPage?: boolean,
  isShow?: boolean;
}
const LoadingFullPageInit: ILoadingFullPage = {
  isFullPage: true,
  isShow: false,
}
const LoadingFullPage = (props: ILoadingFullPage = LoadingFullPageInit) => {
  const classes = useStyles();
  if(!props.isShow) return null;
  const classRoot = props.isFullPage ? classes.root :  classes.rootNotFullPage;
  return (
    <div className={classRoot}>
      <CircularProgress style={{ color: '#FFD233' }} />
    </div>
  )
}

export default LoadingFullPage;

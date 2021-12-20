import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { reducerType } from 'store/reducers';

const mapStateToProps = (state: reducerType) => {
  return {
    isLoading: state.global.isLoading,
  };
};

interface authProps {
  isLoading: boolean;
}

function Authentication(props: authProps) {
  return (
    <>
      <Login/>
    </>
  );
}

export default connect(mapStateToProps)(Authentication);
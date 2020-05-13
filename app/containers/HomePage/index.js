/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// import { DAEMON } from 'utils/constants';

import {
  makeSelectItems,
  makeSelectData,
  makeSelectLoading,
  makeSelectError,  
} from 'containers/App/selectors';

import messages from './messages';
import { loadItems } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  loading,
  error,
  onLoad,
  data
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // Remove hook later; placeholder to get sense of how app works
  useEffect(() => {
    console.log("on load")
    onLoad();
  }, []);

  const itemsListProps = {
    loading,
    error,
  };  

  console.log("This is data:",data);

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header}/>
      </h1>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  console.log('mapdispatchtoProps')
  return {
    onLoad: evt => dispatch(loadItems()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

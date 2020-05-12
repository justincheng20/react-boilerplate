/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectItems,
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
  items,
  onLoad
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const itemsListProps = {
    loading,
    error,
    items,
  };

  onLoad();

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
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

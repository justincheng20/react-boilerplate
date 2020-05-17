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


import {
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import messages from './messages';
import { loadItems } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

// import ListItem from 'components/ListItem';
import ItemList  from 'components/ItemList/';

import { Link } from 'react-router-dom';


const key = 'home';

export function HomePage({
  loading,
  error,
  onLoad,
  data,
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    console.log("use effect")
    if (data.items.length === 0) onLoad();
  }, []);

  // Pass this into ListItem?
  const itemsListProps = {
    data,
  };

  if (loading) {
    console.log("loading", loading)
    return "Loading..."
  }

  if (error) {
    return "Something went wrong."
  }

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Link to="/new">
        Add a new item
        </Link>
      <ItemList data={data} /> 
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
  return {
    onLoad: () => dispatch(loadItems()),
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

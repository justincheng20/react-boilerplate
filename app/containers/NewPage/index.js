import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';


import { addItem } from '../App/actions';
import { changeItemName } from './actions';
import { makeSelectItemName } from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';


import { Link } from 'react-router-dom';

const key = 'new';

export function NewPage({ itemName, onSubmitForm, onChangeItemName, loading, error }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (loading){
    console.log("send")
    return "Sending..."
  }

  if (error){
    return "something went wrong"
  }

  return (
    <div>
      <h1>
        Add a new item
    </h1>

      <Link to="/">
        Home
        </Link>

      <form onSubmit={onSubmitForm}>
        <label htmlFor="itemName">Item:</label>
        <input
          id="itemName"
          name="itemName"
          value={itemName}
          onChange={onChangeItemName}
        />
        <button>Add a new item!</button>
      </form>
    </div>
  );
}

NewPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  itemName: PropTypes.string,
  onChangeItemName: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  itemName: makeSelectItemName(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeItemName: evt => dispatch(changeItemName(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(push('/'));
      dispatch(addItem(itemName));
      // dispatch(changeItemName(""));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NewPage);
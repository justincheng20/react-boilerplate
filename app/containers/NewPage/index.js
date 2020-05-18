import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { addItem } from '../App/actions';
import { makeSelectItemName } from './selectors';
import { changeItemName } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'new';

export function NewPage({
  itemName,
  onSubmitForm,
  onChangeItemName,
  loading,
  error,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (loading) {
    return 'Sending...';
  }

  if (error) {
    return 'Something went wrong';
  }

  return (
    <div className="title">
      <h1>Add a new item </h1>
      <Link className="button" to="/">
        Home
      </Link>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="itemName">Item: </label>
        <input
          id="itemName"
          name="itemName"
          required
          value={itemName}
          onChange={onChangeItemName}
        />
        <button type="submit"> Add </button>
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
      dispatch(addItem());
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

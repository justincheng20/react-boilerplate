import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import { addItem } from '../App/actions';
import { changeItemName } from './actions';
import { makeSelectItemName } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';



const key = 'new';


export function NewPage({ itemName, onSubmitForm, onChangeItemName, push }) {
  console.log("itemName", itemName)
  console.log("new page")
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <h1>
        This is a test.
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
  onSubmitForm: PropTypes.func,
  itemName: PropTypes.string,
  onChangeItemName: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  itemName: makeSelectItemName(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeItemName: evt => dispatch(changeItemName(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addItem(itemName));
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
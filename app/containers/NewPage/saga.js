import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_ITEM } from 'containers/App/constants';
import { itemAdded, addItemError } from 'containers/App/actions';

import request from 'utils/request';
import { push } from 'connected-react-router';
import { makeSelectItemName } from './selectors';

export function* postItem() {
  const itemName = yield select(makeSelectItemName());
  const requestURL = `http://localhost:3000/api`;
  try {
    // Call our request helper (see 'utils/request')
    const postRequest = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item: itemName }),
    });
    const { item } = { ...postRequest };
    yield put(itemAdded(item));
    yield put(push('/'));
  } catch (err) {
    yield put(addItemError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addItemData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_ITEM, postItem);
}

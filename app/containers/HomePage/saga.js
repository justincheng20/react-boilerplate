import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ITEMS } from 'containers/App/constants';
import { itemsLoaded, itemsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getItems() {
  const requestURL = `http://localhost:3000/api`;
  try {
    // Call our request helper (see 'utils/request')
    const resp = yield call(request, requestURL);
    console.log("getItems")
    yield put(itemsLoaded(resp.data));
  } catch (err) {
    yield put(itemsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* itemsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ITEMS, getItems);
}

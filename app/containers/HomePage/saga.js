import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ITEMS } from 'containers/App/constants';
import { itemsLoaded, itemsLoadingError } from 'containers/App/actions';
import request from 'utils/request';

export function* getItems() {
  const requestURL = `http://localhost:3000/api`;
  try {
    const resp = yield call(request, requestURL);
    yield put(itemsLoaded(resp.data));
  } catch (err) {
    yield put(itemsLoadingError(err));
  }
}

export default function* itemsData() {
  yield takeLatest(LOAD_ITEMS, getItems);
}

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

export default function* addItemData() {
  yield takeLatest(ADD_ITEM, postItem);
}

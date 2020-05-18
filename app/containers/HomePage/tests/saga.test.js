import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_ITEMS } from 'containers/App/constants';
import { itemsLoaded, itemsLoadingError } from 'containers/App/actions';

import itemsData, { getItems } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getItems Saga', () => {
  let getItemsGenerator;

  beforeEach(() => {
    getItemsGenerator = getItems();

    const callDescriptor = getItemsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the itemsLoaded action if it requests the data successfully', () => {
    const items = ['Item One'];
    const mockData = { data: items };
    const putDescriptor = getItemsGenerator.next(mockData).value;
    expect(putDescriptor).toEqual(put(itemsLoaded(items)));
  });

  it('should call the itemLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getItemsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(itemsLoadingError(response)));
  });
});

describe('itemData Saga', () => {
  const itemDataSaga = itemsData();

  it('should start task to watch for LOAD_ITEMS action', () => {
    const takeLatestDescriptor = itemDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_ITEMS, getItems));
  });
});

import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_ERROR,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
} from './constants';

export function loadItems() {
  return {
    type: LOAD_ITEMS,
  };
}

export function itemsLoaded(items) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    items,
  };
}

export function itemsLoadingError(error) {
  return {
    type: LOAD_ITEMS_ERROR,
    error,
  };
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function itemAdded(item) {
  return {
    type: ADD_ITEM_SUCCESS,
    item,
  };
}

export function addItemError(error) {
  return {
    type: ADD_ITEM_ERROR,
    error,
  };
}

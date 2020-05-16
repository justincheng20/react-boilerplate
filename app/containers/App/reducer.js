/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_ITEMS_SUCCESS, LOAD_ITEMS, LOAD_ITEMS_ERROR, ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  data: {
    items: false,
  }
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ITEMS:
        console.log("reducer, LOAD items")
        draft.loading = true;
        draft.error = false;
        draft.data.items = [];
        break;

      case LOAD_ITEMS_SUCCESS:
        console.log("load items success", action.items)
        draft.data = {items: action.items};
        draft.loading = false;
        break;

      case LOAD_ITEMS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_ITEM:
        console.log("ADD item")
        draft.loading = true;
        draft.error = false;
        
        break;

      case ADD_ITEM_SUCCESS:
        console.log("ADD item success", action.item, state.data.items)
        draft.data.items = [action.item, ...state.data.items];
        console.log(draft.data.items)
        draft.loading = false;
        break;
      
      case ADD_ITEM_ERROR:
        console.log(action.error)
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;

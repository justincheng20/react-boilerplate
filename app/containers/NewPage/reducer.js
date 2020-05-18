import produce from 'immer';
import { CHANGE_ITEM_NAME } from './constants';

export const initialState = {
  itemName: '',
};

/* eslint-disable default-case, no-param-reassign */
const newReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_ITEM_NAME:
        draft.itemName = action.itemName;
        break;
    }
  });

export default newReducer;

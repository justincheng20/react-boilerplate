import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNew = state => state.new || initialState;

const makeSelectItemName = () =>
  createSelector(
    selectNew,
    newState => newState.itemName,
  );

export { selectNew, makeSelectItemName };

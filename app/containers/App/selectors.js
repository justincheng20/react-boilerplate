import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectItems = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data.items,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectItems,
  makeSelectLocation,
  makeSelectData,
};

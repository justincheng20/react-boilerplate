/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_ITEMS, LOAD_ITEMS_SUCCESS, LOAD_ITEMS_ERROR, ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadItems() {
  return {
    type: LOAD_ITEMS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function itemsLoaded(items) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    items,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function itemsLoadingError(error) {
  return {
    type: LOAD_ITEMS_ERROR,
    error,
  };
}

export function addItem(item){
  return {
    type: ADD_ITEM,
    item
  };
}

export function itemAdded(item){
  return {
    ADD_ITEM_SUCCESS,
    item
  };
}

export function addItemError(error){
  return {
    type: ADD_ITEM_ERROR,
    error,
  }
}
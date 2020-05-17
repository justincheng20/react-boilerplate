/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_ITEMS = 'boilerplate/App/LOAD_ITEMS';
export const LOAD_ITEMS_SUCCESS = 'boilerplate/App/LOAD_ITEMS_SUCCESS';
export const LOAD_ITEMS_ERROR = 'boilerplate/App/LOAD_ITEMS_ERROR';
export const ADD_ITEM = 'boilerplate/App/ADD_ITEMS';
export const ADD_ITEM_SUCCESS = 'boilerplate/App/ADD_ITEMS_SUCCESS';
export const ADD_ITEM_ERROR = 'boilerplate/App/ADD_ITEMS_ERROR';

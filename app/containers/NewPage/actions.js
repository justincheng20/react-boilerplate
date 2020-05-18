import { CHANGE_ITEM_NAME } from './constants';

export function changeItemName(itemName) {
  return {
    type: CHANGE_ITEM_NAME,
    itemName,
  };
}

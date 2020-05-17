

import React from 'react';
import PropTypes from 'prop-types';

import StyledItem from './StyledItem';


function Item({item}) {
  console.log(item, "item")
  let itemName = (
    <div>
      {item}
    </div>
  );



  return <StyledItem>{itemName}</StyledItem>;
}

Item.propTypes = {
  itemName: PropTypes.string,
};

export default Item;

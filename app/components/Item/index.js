import React from 'react';
import PropTypes from 'prop-types';
import StyledItem from './StyledItem';

function Item({ item }) {
  const itemName = <div>{item}</div>;

  return <StyledItem>{itemName}</StyledItem>;
}

Item.propTypes = {
  item: PropTypes.string,
};

export default Item;

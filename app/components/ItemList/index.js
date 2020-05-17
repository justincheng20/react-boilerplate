import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'

import StyledItemList from './StyledItemList';
import Item from 'components/item';


function ItemList({data}) {
  console.log("itmelistdata", data)
  if (data.items.length === 0){
    return "Nothing added yet"
  }

  else{
  console.log("itemlist", data.items)


  return (
    <div>
      <StyledItemList>
      <ul>
        {data.items.map(item => <Item key={uuid()} item={item}></Item>)}
      </ul>
      </StyledItemList>
    </div>
  );
  }
}

ItemList.propTypes = {
  itemName: PropTypes.array ,
};

export default ItemList;

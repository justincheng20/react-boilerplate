import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'

import StyledItemList from './StyledItemList';
import Item from 'components/item';


function ItemList({data, loading, error}) {
  

  if (loading){
    console.log("items loading")
    return "Loading"
  }

  if (error){
    return "Something went wrong"
  }

  console.log("data thing", data)
  if (data.items.length === 0){
    return "Nothing added yet"
  }

  


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

ItemList.propTypes = {
  itemName: PropTypes.array ,
};

export default ItemList;

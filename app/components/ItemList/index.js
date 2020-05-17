import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Item from 'components/Item';
import StyledItemList from './StyledItemList';

function ItemList({ data, loading, error }) {
  if (loading) {
    return 'Loading';
  }

  if (error) {
    return 'Something went wrong';
  }

  if (data.items.length === 0) {
    return 'Nothing added yet';
  }

  return (
    <div>
      <StyledItemList>
        <ul>
          {data.items.map(item => (
            <Item key={uuid()} item={item} />
          ))}
        </ul>
      </StyledItemList>
    </div>
  );
}

ItemList.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default ItemList;

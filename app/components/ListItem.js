import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'

function ListItem({data, loading, error}) {
  return (
    <div>
      <ul>
        {data.items.map(item => <li key={uuid()}>{item}</li>)}
      </ul>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.string,
};

export default ListItem;
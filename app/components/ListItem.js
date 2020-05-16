import React from 'react';
import PropTypes from 'prop-types';

function ListItem({data, loading, error}) {
  return (
    <div>
      <ul>
        {data.items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.string,
};

export default ListItem;
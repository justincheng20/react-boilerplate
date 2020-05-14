import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props) {
  return (
    <div>
      <ul>
        {props.data.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.string,
};

export default ListItem;
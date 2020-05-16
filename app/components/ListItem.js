import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props) {
  console.log("props",props)
  return (
    <div>
      <ul>
        {props.items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.string,
};

export default ListItem;
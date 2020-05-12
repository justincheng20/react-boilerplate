import React, { useState } from "react";
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


export default function NewPage({ item, onSubmitForm, onChangeItem }) {

  const [formData, setFormData] = useState({
    item: "",
  });


  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    // do something with the data submitted
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>
        This is a test.
    </h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item:</label>
      <input
        id="item"
        name="item"
        value={formData.item}
        onChange={handleChange}
      />
      <button>Add a new item!</button>
    </form>
    </div>
  );
}

NewPage.propTypes = {
  onSubmitForm: PropTypes.func,
  item: PropTypes.string,
  onChangeItem: PropTypes.func,
};
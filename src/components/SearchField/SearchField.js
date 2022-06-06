import React from 'react';
import './SearchField.css';
const SearchField = (props) => {
  return (
    <div className="search-field-wrapper">
      <input type={'search'} {...props} />
    </div>
  );
};

export default SearchField;

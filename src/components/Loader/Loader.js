import React from 'react';
import './Loader.css';
const Loader = (props) => {
  if (props.loading)
    return <div className="loader-wrapper">{props.children}</div>;
  else return <div>{props.children}</div>;
};

export default Loader;

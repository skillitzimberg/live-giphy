import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Input(props) {
  function findImage(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      props.onSearch(event.target.value);
      event.target.value = '';
    }
  }

  return (
    <div className="inputComp">
      <legend>Search NASA</legend>
      <input onKeyUp={findImage}/>
    </div>
  );
}

Input.propTypes = {
  onSearch: PropTypes.func
};

export default Input;

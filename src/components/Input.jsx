import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Input(props) {

  function clearInputField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.value = '';
    }
  }

  return (
    <div className="inputComp">
      <h3>Input component</h3>
      <legend>Search Giphy</legend>
      <input
        onChange={props.onTextChange}
        onKeyUp={clearInputField}/>
    </div>
  );
}

Input.propTypes = {
  onTextChange: PropTypes.func
};

export default Input;

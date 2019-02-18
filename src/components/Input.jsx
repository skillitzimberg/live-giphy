import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

function Input(props) {
  function findImage(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      props.onSearch(event.target.value);
      event.target.value = '';
    }
  }

  return (
    <div className={styles.box}>
      <legend>Search NASA</legend>
      <input onKeyUp={findImage}/>
    </div>
  );
}

Input.propTypes = {
  onSearch: PropTypes.func
};

export default Input;

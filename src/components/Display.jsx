import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';

function Display(props) {
  return (
    <div className={styles.box}>
      <div className={styles.layout}>
        <img src={props.embedUrl} frameBorder="1" allowFullScreen>
        </img>
        <div className={styles.controls}>
          <div>Search: {props.searchText}</div>
          <button type='submit'>Save to Favorites</button>
        </div>
      </div>
    </div>
  );
}

Display.propTypes = {
  searchText: PropTypes.string,
  embedUrl: PropTypes.string
};

export default Display;

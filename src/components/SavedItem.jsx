import React from 'react';
import PropTypes from 'prop-types';
// import styles from './App.css';

function SavedItem(props) {
  return (
    <div>
      <h3>{props.searchTerm}</h3>
      <img src={props.url} frameBorder="1" allowFullScreen>
      </img>
      <p>Key={props.id}</p>
      <button onClick={() => props.deleteItem(props.id)}>Delete</button>
    </div>
  );
}

SavedItem.propTypes = {
  searchTerm: PropTypes.string,
  url: PropTypes.string,
  deleteItem: PropTypes.func,
  id: PropTypes.string
};

export default SavedItem;

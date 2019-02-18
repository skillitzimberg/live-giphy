import React from 'react';
import PropTypes from 'prop-types';


function Display(props) {
  return (
    <div>
      <h3>Display component</h3>
      <div>{props.searchText}</div>
      <div>
        <iframe src={props.embedUrl} frameBorder="1" allowFullScreen>
        </iframe>
        <button type='submit'>Save to Favorites</button>
      </div>
    </div>
  );
}

Display.propTypes = {
  searchText: PropTypes.string,
  embedUrl: PropTypes.string
};

export default Display;

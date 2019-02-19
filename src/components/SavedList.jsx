import React from 'react';
import PropTypes from 'prop-types';
// import styles from './App.css';
import SavedItem from './SavedItem';

function SavedList(props) {

  return (
    <div>
      {props.saveList.map((item) =>
        <SavedItem
          searchTerm={item[0]}
          url={item[1]}
          deleteItem={props.deleteRequested}
          key={props.id}
        />
      )}
    </div>
  );
}
SavedList.propTypes = {
  saveList: PropTypes.array,
  id: PropTypes.string,
  deleteRequested: PropTypes.func
};

export default SavedList;

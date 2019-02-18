import React from 'react';
import menuIcon from '../assets/images/menuIcon.svg';
import styles from './App.css';

function App() {
  return (
    <div>
      <img src={menuIcon}/>
      <h1>React Application</h1>
      <h3 className={styles.text}>Local CSS Module Style</h3>
    </div>
  );
}

export default App;

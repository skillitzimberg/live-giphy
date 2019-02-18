import React from 'react';
// import menuIcon from '../assets/images/menuIcon.svg';
import styles from './App.css';
import ApiControl from './ApiControl';

function App() {
  return (
    <div>
      <h3 className={styles.text}>App component</h3>
      <ApiControl />
    </div>
  );
}

export default App;

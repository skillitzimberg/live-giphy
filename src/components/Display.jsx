import React from 'react';
// import styles from './App.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('display did mount');
  }

  componentWillUnmount() {
    console.log('display will unmount');
  }

  render() {
    return (
      <div>
        <h3>Display component</h3>
      </div>
    );
  }
}

export default Display;

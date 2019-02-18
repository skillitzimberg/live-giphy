import React from 'react';
import Input from './Input';
import Display from './Display';
import SavedList from './SavedList';

class ApiControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: 'Hello Text.',
      showDisplay: true
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    event.preventDefault();
    console.log('handleTextChange', event.target.value);
    this.setState({inputText: event.target.value});
    if(event.target.value === 'hide') {
      this.setState({showDisplay: false});
    } else if(event.target.value === 'show') {
      this.setState({showDisplay: true});
    }
  }

  render() {
    return (
      <div>
        <h3>ApiControl component</h3>
        <p>{this.state.inputText}</p>
        <Input
          onTextChange={this.handleTextChange}/>
        {this.state.showDisplay && <Display />}
        <SavedList />
      </div>
    );
  }
}

export default ApiControl;

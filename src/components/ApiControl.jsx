import React from 'react';
import Input from './Input';
import Display from './Display';
import SavedList from './SavedList';
import api_key from './api-key';

class ApiControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: 'Hello Text.',
      showDisplay: true,
      displayUrl: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    event.preventDefault();
    console.log('handleTextChange', event.target.value);
    this.setState({inputText: event.target.value});
    fetch(`https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.state.inputText}&limit=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({displayUrl: data['data'][0].embed_url});
        console.log('url', data['data'][0].embed_url);
      });
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

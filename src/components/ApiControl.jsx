import React from 'react';
import Input from './Input';
import Display from './Display';
import SavedList from './SavedList';
import api_key from './api-key';

class ApiControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      displayUrl: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    event.preventDefault();
    const inputText = event.target.value;
    const url = `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${inputText}&limit=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if(data['data'] && data['data'][0]) {
          console.log('data', inputText, data);
          this.setState({
            searchText: inputText,
            displayUrl: data['data'][0].embed_url
          });
        }
      });
  }

  render() {
    return (
      <div>
        <h3>ApiControl component</h3>
        <p>{this.state.inputText}</p>
        <Input
          onTextChange={this.handleTextChange}/>
        <Display
          searchText={this.state.searchText}
          embedUrl={this.state.displayUrl}/>
        <SavedList />
      </div>
    );
  }
}

export default ApiControl;

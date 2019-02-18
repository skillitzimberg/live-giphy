import React from 'react';
import Input from './Input';
import Display from './Display';
import SavedList from './SavedList';
// import api_key from './api-key';

class ApiControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      displayUrl: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(text) {
    console.log('search', text);
    // const url = `https://images-api.nasa.gov/search?q=${inputText}`;
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if(data['data'] && data['data'][0]) {
    //       console.log('data', inputText, data);
    //       this.setState({
    //         searchText: inputText,
    //         displayUrl: data['data'][0].embed_url
    //       });
    //     }
    //   });
  }

  render() {
    return (
      <div>
        <p>{this.state.inputText}</p>
        <Input
          onSearch={this.handleSearch}/>
        <Display
          searchText={this.state.searchText}
          embedUrl={this.state.displayUrl}/>
        <SavedList />
      </div>
    );
  }
}

export default ApiControl;

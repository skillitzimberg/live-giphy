import React from 'react';
import Input from './Input';
import Display from './Display';
import SavedList from './SavedList';

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
    const url = `https://images-api.nasa.gov/search?media_type=image&q=${text}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          searchText: text,
          displayUrl: data.collection.items[0].links[0].href
        });
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.searchText}</p>
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

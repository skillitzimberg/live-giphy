import React from 'react';
import Input from './Input';
import Display from './Display';
import SavedList from './SavedList';
import { v4 } from 'uuid';

class ApiControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      displayUrl: '',
      saveRequested: false,
      saveList: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleSave(text, url) {
    console.log('save', text, url);
    let newSaveList = this.state.saveList.slice();
    newSaveList.push([text, url]);
    this.setState({saveList: newSaveList, saveRequested: true});
  }

  handleDelete(key) {
    console.log('Handle Delete Key', key);
    let newSaveList = this.state.saveList.filter(item => item.id = key);
    this.setState({saveList: newSaveList, saveRequested: true});
  }

  render() {
    return (
      <div>
        <p>{this.state.searchText}</p>
        <Input
          onSearch={this.handleSearch}/>
        <Display
          searchText={this.state.searchText}
          embedUrl={this.state.displayUrl}
          onSave={this.handleSave}/>
        {this.state.saveRequested &&
          <SavedList
            saveList={this.state.saveList} deleteRequested={this.handleDelete}
            id={v4()}/>
        }

      </div>
    );
  }
}

export default ApiControl;

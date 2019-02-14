import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {

  onFormSubmit = searchTerm => {
    console.log(searchTerm);
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit}/>
      </div>
    )
  }
}

export default App;

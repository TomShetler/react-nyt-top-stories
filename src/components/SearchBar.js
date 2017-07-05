import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term: ''
    };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"/>
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
}

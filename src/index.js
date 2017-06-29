import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      featuredArticle: null
    };
  }

  render() {
    return (
      <SearchBar />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
);

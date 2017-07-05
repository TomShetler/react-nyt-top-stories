import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';

const API_KEY = 'a83a27ebb1f449d4ad60655cd1271b7c';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      featuredArticle: null
    };
    this.articleSearch('home');
  }

  articleSearch(term) {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/${term}.json`, {
      params: {
        'api-key': API_KEY
      }
    })
        .then((res) => {
        this.setState({
          articles: res.data.results,
          featuredArticle: res.data.results[0]
        });
        console.log(this.state.featuredArticle);
        })
        .catch((e) => {
          console.log(e);
        });
  }

  render() {
    const articleSearch = _.debounce((term) => { this.articleSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={articleSearch}/>
        <ArticleDetails article={this.state.featuredArticle}/>
        <ArticleList
          onArticleSelect={featuredArticle => this.setState({featuredArticle})}
          articles={this.state.articles}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
);

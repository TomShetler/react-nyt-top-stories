import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = (props) => {
  const articleItems = props.articles.map((article) => {
    return (
      <ArticleListItem
        onArticleSelect={props.onArticleSelect}
        key={article.url}
        article={article}/>
    );
  });

  return (
    <div className="row">
    <ul className="col-md-8 col-md-offset-2 list-group">
      {articleItems}
    </ul>
  </div>
  );
}

export default ArticleList;

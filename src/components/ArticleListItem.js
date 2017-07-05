import React from 'react';

const ArticleListItem = ({article, onArticleSelect}) => {
  return (
    <li onClick={() => onArticleSelect(article)} className="list-group-item">
      <div className="article-list media">
        <div className="media-left">
          {/* <img className="media-object" src={article.multimedia[0].url}/> */}
        </div>
        <div className="media-body">
          <div className="media-heading">{article.title}</div>
        </div>
      </div>
    </li>
  );
};

export default ArticleListItem;

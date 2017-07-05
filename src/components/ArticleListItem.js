import React from 'react';

const ArticleListItem = ({article}) => {
  const imageUrl = article.multimedia[0].url;
  return (
    <li className="list-group-item">
      <div className="article-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{article.title}</div>
        </div>
      </div>
    </li>
  );
};

export default ArticleListItem;

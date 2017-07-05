import React from 'react';

const ArticleDetails = ({article}) => {
if (!article) {
    return <div>Loading...</div>;
}

  return (
    <div className="featured-article row">
    <div className="article-details col-md-8 col-md-offset-2">
      <div className="article-image">
        <img src={article.multimedia[4].url} />
      </div>
        <div className="details">
          <div>{article.title}</div>
          <div>{article.abstract}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;

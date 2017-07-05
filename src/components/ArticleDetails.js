import React from 'react';

const ArticleDetails = ({article}) => {
if (!article) {
    return <div>Loading...</div>;
}

  return (
    <div className="featured-article row">
    <div className="article-details col-md-8 col-md-offset-2">
      <div className="article-author">
        <span id="author"><strong>{article.byline}</strong></span>
        <span id="date-created"><i>{article.created_date}</i></span>
      </div>
      <div className="article-image">
        <img src={article.multimedia[4].url} />
      </div>
        <div className="details">
          <div>
            <h2>{article.title}</h2>
          </div>
          <div>
            <h4>{article.abstract}</h4>
          </div>
          <div>
            <a href={article.url}>Read More...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;

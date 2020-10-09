import React from "react";
import { Link } from "@reach/router";
import "bootstrap-4-grid";

import VoteHandler from "./VoteHandler";

const ArticleCard = ({ article }) => {
  const {
    article_id,
    title,
    author,
    created_at,
    comment_count,
    votes,
  } = article;
  const myDate = new Date(created_at).toString();
  const formattedDate = myDate.slice(4, 15);
  return (
    <div className="ArticleCard">
      <Link to={`/articles/${article_id}`}>
        <h3 className="ArticleTitle">{title}</h3>
      </Link>
      <div className="ArticleCardInner">
        <Link to={`/articles/${article_id}`}>
          <p>Author: {author}</p>
          <p>Created at: {formattedDate}</p>
          <p>comment count: {comment_count}</p>
        </Link>

        <VoteHandler
          className="VoteForm"
          id={article_id}
          thing={"articles"}
          votes={votes}
        />
      </div>
    </div>
  );
};

export default ArticleCard;

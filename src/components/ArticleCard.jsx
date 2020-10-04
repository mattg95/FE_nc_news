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
  return (
    <div className="ArticleCard">
      <Link to={`/articles/${article_id}`} className="ArticleTitle">
        <h3>{title}</h3>
      </Link>
      <p>Author: {author}</p>
      <p>created_at: {created_at}</p>
      <p>comment count: {comment_count}</p>

      <VoteHandler
        className="VoteForm"
        id={article_id}
        thing={"articles"}
        votes={votes}
      />
    </div>
  );
};

export default ArticleCard;

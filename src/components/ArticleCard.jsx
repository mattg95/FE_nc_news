import React from "react";
import { Link } from "@reach/router";
import "bootstrap-4-grid";

import VoteHandler from "./VoteHandler";

const ArticleCard = ({ article }) => {
  const {
    id,
    title,
    author,
    createdAt,
    commentCount,
    votes,
  } = article;
  const myDate = new Date(createdAt).toString();
  const formattedDate = myDate.slice(4, 15);
  return (
    <div className="ArticleCard">
      <Link to={`/articles/${id}`}>
        <h3 className="ArticleTitle">{title}</h3>
      </Link>
      <div className="ArticleCardInner">
        <Link to={`/articles/${id}`}>
          <p>Author: {author}</p>
          <p>Created at: {formattedDate}</p>
          <p>comment count: {commentCount}</p>
        </Link>

        <VoteHandler
          className="VoteForm"
          id={id}
          thing={"articles"}
          votes={votes}
        />
      </div>
    </div>
  );
};

export default ArticleCard;

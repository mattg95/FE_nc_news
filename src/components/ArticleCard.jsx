import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-4-grid";

import VoteHandler from "./VoteHandler";

const ArticleCard = ({ article }) => {
  const { id, title, author, createdAt, commentCount, votes, topics } = article;
  const myDate = new Date(createdAt).toString();
  const formattedDate = myDate.slice(4, 15);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/articles/${id}`);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="ArticleCard"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div>
        <h3 className="ArticleTitle">{title}</h3>
        <div className="ArticleCardInner" onClick={stopPropagation}>
          <div>
            <p>Author: {author}</p>
            <p>Created at: {formattedDate}</p>
            <p>comment count: {commentCount}</p>
            <p>Topics:</p>
            <div className="ArticleCardTopicsSection">
              {topics.map(({ slug, id }) => (
                <Link
                  to={`/articles/topic/${id}`}
                  key={id}
                  onClick={stopPropagation}
                >
                  <div className="ArticleCardTopic">
                    <p className="DisplayVotes">{slug}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <VoteHandler
            className="VoteForm"
            id={id}
            thing={"articles"}
            votes={votes}
            onClick={stopPropagation}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

import React from 'react';
import { Link } from '@reach/router';
import 'bootstrap-4-grid';

import VoteHandler from './VoteHandler';

const ArticleCard = ({ article }) => {
  const { id, title, author, createdAt, commentCount, votes, topics } = article;
  const myDate = new Date(createdAt).toString();
  const formattedDate = myDate.slice(4, 15);
  return (
    <div className='ArticleCard'>
      <Link to={`/articles/${id}`}>
        <h3 className='ArticleTitle'>{title}</h3>
        <div className='ArticleCardInner'>
          <div>
            <p>Author: {author}</p>
            <p>Created at: {formattedDate}</p>
            <p>comment count: {commentCount}</p>
            <p>Topics:</p>
            <div className='ArticleCardTopicsSection'>
              {topics.map(({ slug, id }) => {
                return (
                  <Link to={`/articles/topic/${id}`} key={id}>
                    <div className='ArticleCardTopic'>
                      <p className='DisplayVotes'>{slug}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <VoteHandler className='VoteForm' id={id} thing={'articles'} votes={votes} />
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;

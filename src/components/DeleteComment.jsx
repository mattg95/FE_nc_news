import React from 'react';
import * as api from '../utils/api';
import ErrorHandler from './ErrorHandler';

const DeleteComment = ({ comment_id, hideComment }) => {
  const handleClick = () => {
    return api
      .deleteComment(comment_id)
      .then(() => hideComment())
      .catch((err) => ErrorHandler(err));
  };
  return (
    <div>
      <button onClick={handleClick} className='DeleteButton'>
        Delete
      </button>
    </div>
  );
};

export default DeleteComment;

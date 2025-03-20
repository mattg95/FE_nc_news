import React from 'react';
import * as api from '../utils/api';
import ErrorHandler from './ErrorHandler';

const DeleteComment = ({ id, hideComment }) => {
  const handleClick = () => {
    return api
      .deleteComment(id)
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

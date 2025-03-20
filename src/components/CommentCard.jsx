import React, { Component } from 'react';
import DeleteComment from './DeleteComment';
import VoteHandler from './VoteHandler';

export default class CommentCard extends Component {
  state = {
    display: true,
  };
  hideComment = () => {
    return this.setState({ display: false });
  };
  render() {
    const { author, authorId, id, body, votes } = this.props.comment;

    return (
      <div>
        {this.state.display && (
          <div className='CommentCard'>
            <div className='InsetBorder'>
              {this.props.userId === authorId && <DeleteComment id={id} hideComment={this.hideComment} />}
              <p>{body}</p>
              <p>Author: {author}</p>
              <VoteHandler id={id} thing={'comments'} votes={votes} userComment={this.props.userId === authorId} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

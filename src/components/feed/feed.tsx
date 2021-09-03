import React from 'react';
import Button from '../button/button';
import Feedback from '../feedback/feedback-card';
import { FEEDBACKS } from './constants';

const Feed = () => {
  return (
    <>
      <div className='feed-share-header'>
        <span className='feed-share-header__text'>
          Want to share feedback for your colleague?
        </span>

        <Button text='Share Feedback' />
      </div>

      {FEEDBACKS.map((feedback) => (
        <Feedback {...feedback} />
      ))}
    </>
  )
}

export default Feed;
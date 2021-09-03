import React from 'react';

interface FeedbackContentI {
  title?: string;
  message: string;
}

const FeedbackContent = (props: FeedbackContentI) => {
  return (
    <div className='feedback-content'>
      {props.title ? (
        <span className='feedback-type'>
          {props.title}
        </span>
      ): null}

      <span className='feedback-message'>
        {props.message}
      </span>
    </div>
  )
}

export default FeedbackContent;
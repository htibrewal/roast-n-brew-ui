import React from 'react';

const FeedbackBy = ({ giverImgUrl, giverName, days }: any) => {
  return (
    <div className='center-flex-row given-by-wrapper'>
      <img src={giverImgUrl} className='giver-img' alt='user' />

      <div className='flex-col'>
        <span>
          { giverName }
        </span>
        <span className='given-at'>
          { days } days ago
        </span>
      </div>
    </div>
  )
}

export default FeedbackBy;
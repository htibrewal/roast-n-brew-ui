import React from 'react';

const FeedbackBy = () => {
  const giverImgUrl = '';

  return (
    <div className='center-flex-row given-by-wrapper'>
      <img src={giverImgUrl} className='giver-img' alt='user' />

      <div className='center-flex-col'>
        <span>Tariq Iqbal</span>
        <span className='given-at'>
          11 days agon
        </span>
      </div>
    </div>
  )
}

export default FeedbackBy;
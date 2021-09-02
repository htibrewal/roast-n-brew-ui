import React from 'react';

const User = () => {
  const userImgUrl = '';

  return (
    <div className='center-flex-row user-info-wrapper'>
      <img src={userImgUrl} className='user-img' alt='user' />

      <span className='user-name'>
        Akhil Krishnan
      </span>
    </div>
  )
};

export default User;
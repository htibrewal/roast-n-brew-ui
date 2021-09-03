import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const userImgUrl = 'https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z';

  return (
    <Link to='/dashboard/profile' className='center-flex-row user-info-wrapper'>
      <img src={userImgUrl} className='user-img' alt='user' />

      <span className='user-name'>
        Akhil Krishnan
      </span>
    </Link>
  )
};

export default User;
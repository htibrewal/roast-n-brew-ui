import React from 'react';
import location from '../../icons/location.svg';
import start from '../../icons/start.svg';

const UserInfoCard = (data: any) => {
  const getName = (data: any) => {
    const name = data.first_name + (
      data.last_name ? data.last_name : ''
    );

    return name;
  }

  return (
    <div className='user-card-wrapper'>
      <img src={data.image_url} className='card-user-img' alt='user-img' />

      <span>
        { getName(data) }
      </span>

      <span className='card-user-role'>
        { data.designation }
      </span>

      <div className='card-user-location'>
        <span className='card-user-location__wrap'>
          <img src={location} className='card-user-location__icon' />

          <span>
            { data.location }
          </span>
        </span>

        <span className='card-user-location__wrap'>
          <img src={start} className='card-user-location__icon' />

          <span>
            Joined September 2017
          </span>
        </span>
      </div>

      <div className='card-user-numbers'>
        <span className='card-user-numbers__wrap'>
          <span className='card-user-numbers__key'>
            Coin Balance
          </span>

          <span className='card-user-numbers__value'>
            { data.coins_balance }
          </span>
        </span>

        <span className='card-user-numbers__wrap'>
          <span className='card-user-numbers__key'>
            Coin Burned
          </span>

          <span className='card-user-numbers__value'>
            32
          </span>
        </span>

        <span className='card-user-numbers__wrap'>
          <span className='card-user-numbers__key'>
            Feedback Received
          </span>

          <span className='card-user-numbers__value'>
            43
          </span>
        </span>

        <span className='card-user-numbers__wrap'>
          <span className='card-user-numbers__key'>
            Feedback Given
          </span>

          <span className='card-user-numbers__value'>
            35
          </span>
        </span>
      </div>
    </div>
  )
}

export default UserInfoCard;
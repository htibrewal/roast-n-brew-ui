import React from 'react';
import coin from '../../../icons/coin.svg';

const Coins = () => {
  return (
    <div className='center-flex-row coin-badge'>
      <img src={coin} className='coin-icon' alt='coin'/>
      <span className='coin-count'>
        43257
      </span>
    </div>
  )
}

export default Coins;
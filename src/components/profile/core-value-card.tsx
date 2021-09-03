import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { CoreValueCardI } from '../../interfaces/interface';

const CoreValueCard = ({ icon, text, number }: CoreValueCardI) => {
  return (
    <div className='profile__core-value-card'>
      <SvgIcon component={icon} className='profile__core-value-icon' />

      <div className='core-value-info'>
        <span className='core-value-number'>
          { number }
        </span>
        <span className='core-value-desc'>
          { text }
        </span>
      </div>
    </div>
  )
}

export default CoreValueCard;
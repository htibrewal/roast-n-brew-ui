import { SvgIcon } from '@material-ui/core';
import React from 'react';
import { CoreValueCardI } from '../../interfaces/interface';

const CoreValueCard = ({ icon, text }: CoreValueCardI) => {
  return (
    <div className='core-value-card'>
      <SvgIcon component={icon} className='core-value-icon'>
      </SvgIcon>

      <span className='core-value-text'>
        { text }
      </span>
    </div>
  )
}

export default CoreValueCard;
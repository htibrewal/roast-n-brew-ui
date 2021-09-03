import React from 'react';
import { HeadingCardI } from '../../interfaces/heading-card-interface';

const HeadingCard = ({ title, description }: HeadingCardI) => {
  return (
    <div className='heading-card-wrapper'>
      <span>
        { title }
      </span>

      <span className='description-class'>
        { description }
      </span>
    </div>
  )
}

export default HeadingCard;

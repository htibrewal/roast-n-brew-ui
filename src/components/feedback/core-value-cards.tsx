import React from 'react';
import { CoreValueCardI } from '../../interfaces/interface';
import CoreValueCard from './core-value-card';

const CoreValueCards = ({ cards }: {cards: CoreValueCardI[]}) => {

  return (
    <div className='center-flex-row flex-wrap'>
      {cards.map((card) => (
        <CoreValueCard {...card} />
      ))}
    </div>
  )
}

export default CoreValueCards;
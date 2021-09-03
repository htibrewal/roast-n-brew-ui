import React from 'react';
import { CORE_VALUES } from '../../constants';
import CoreValueCards from './core-value-cards';
import FeedbackContent from './feedback-content';
import FeedbackBy from './feedback-given-by';

const Feedback = () => {
  const startMessage = "kudos @Trilok, for always being there and making sure we get all the help " +
    "& guidance that's needed. For helping us in getting unblocked, and making sure things move!"

  return (
    <div className='feedback-card-wrapper'>
      <FeedbackBy />

      <FeedbackContent title='Start Doing' message={startMessage} />

      <FeedbackContent title='Stop Doing' message={startMessage} />

      <CoreValueCards cards={CORE_VALUES} />
    </div>
  )
}

export default Feedback
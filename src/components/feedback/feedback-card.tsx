import React from 'react';
import CoreValueCards from './core-value-cards';
import FeedbackContent from './feedback-content';
import FeedbackBy from './feedback-given-by';

const Feedback = ({
  giverInfo,
  coreValues,
  content
}: any) => {
  return (
    <div className='feedback-card-wrapper'>
      <FeedbackBy {...giverInfo} />

      {Object.entries(content).map(([title, message]: [string, any]) => (
        <FeedbackContent title={ title } message={ message } />
      ))}

      <CoreValueCards cards={coreValues} />
    </div>
  )
}

export default Feedback
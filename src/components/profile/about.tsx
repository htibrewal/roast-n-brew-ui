import React from 'react';
import { CORE_VALUES } from '../../constants';
import CoreValueCard from './core-value-card';

export default function About({ data }: any) {
  console.log(data);

  return (
    <>
      <div className='user-profile-card'>
        <span>
          About
        </span>

        <span className='user-profile-card__about'>
          { data.bio }
        </span>
      </div>

      {/* Core values */}
      <div className='user-profile-card'>
        <div className='d-flex flex-wrap'>
          {CORE_VALUES.map((card) => (
            <CoreValueCard {...card} />
          ))}
        </div>
      </div>

      {/* Talk about */}
      <div className='user-profile-card'>
        <span>
          Talk to me about
        </span>

        <div className='user-profile-card__badges'>
          {data.can_talk_about.map((about: string) => (
            <span className='user-profile-card__badge'>
              {about}
            </span>
          ))}
        </div>
      </div>

      {/* Dont talk about */}
      <div className='user-profile-card'>
        <span>
          Don’t talk to me about
        </span>

        <div className='user-profile-card__badges'>
          {data.cannot_talk_about.map((about: string) => (
            <span className='user-profile-card__badge'>
              {about}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
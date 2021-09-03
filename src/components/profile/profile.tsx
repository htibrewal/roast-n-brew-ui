import React, { useEffect, useState } from 'react';
import { CORE_VALUES } from '../../constants';
import { NetworkRequest } from '../../core/request';
import CoreValueCard from './core-value-card';
import UserInfoCard from './user-info-card';


const Profile = () => {
  const [profileData, setProfileData] = useState<any>({});

  useEffect( () => {
    // (async function() {
    //   const data = await NetworkRequest('GET', '/users/9', {});
    //   setProfileData(data);
    // })();

    fetch('/users/9', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        }
      )
  }, []);

  return (
    <>
      <UserInfoCard data={profileData} />

      <div className='user-info-links'>
        <a className='user-info-link'>
          About
        </a>

        <a className='user-info-link'>
          Received
        </a>

        <a className='user-info-link'>
          Given
        </a>
      </div>

      {/* About */}
      <div className='user-profile-card'>
        <span>
          About
        </span>

        <span className='user-profile-card__about'>
          { profileData.bio }
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

        {/*<div className='user-profile-card__badges'>
          {profileData.can_talk_about.map((about: string) => (
            <span className='user-profile-card__badge'>
              {about}
            </span>
          ))}
        </div>*/}
      </div>

      {/* Dont talk about */}
      <div className='user-profile-card'>
        <span>
          Don’t talk to me about
        </span>

        {/*<div className='user-profile-card__badges'>
          {profileData.cannot_talk_about.map((about: string) => (
            <span className='user-profile-card__badge'>
              {about}
            </span>
          ))}
        </div>*/}
      </div>
    </>
  )
}

export default Profile;
import React from 'react';
import RnBLogo from '../../rnb-logo-sm.png';
import Button from '../button/button';

export default function LoginCard() {
  return (
    <div className='login-card-wrapper'>
      <img src={RnBLogo} className='login-card-wrapper__icon' />

      <span className='login-card-wrapper__title'>
        Welcome to Roast-N-Brew
      </span>

      <span className='login-card-wrapper__desc'>
        Exclusive for Hevo employees
      </span>

      <Button text='Login with Google' />
    </div>
  )
}
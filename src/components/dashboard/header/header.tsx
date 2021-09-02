import React from 'react';
import logo from '../../../icons/Logo.svg'
import Coins from './coins';
import Notification from './notification';
import Searchbar from './searchbar';
import User from './user';

const Header = () => {
  return (
    <div className='header'>
      <div className='center-flex-row'>
        <img src={logo} className="App-logo" alt="logo" />

        <Searchbar />
      </div>

      <div className='center-flex-row'>
        <Coins />

        <Notification />

        <User />
      </div>
    </div>
  )
}

export default Header;
import { Box } from '@material-ui/core';
import logo from '../../icons/Logo.svg'
import React from 'react';
import Button from '../button/button';
import TextInput from '../text-input/text-input';
import { Link } from 'react-router-dom';

export default function SetupProfileForm() {
  return (
    <div className='setup-profile-wrapper'>
      <img src={logo} className="setup-profile-wrapper__icon" alt="logo" />

      <span className='setup-profile-wrapper__title'>
        Help us to understand you better!
      </span>

      <span className='setup-profile-wrapper__desc'>
        These information can be used to connect you with people
      </span>

      <TextInput
        label='What you do at Hevo'
        placeholder='Code writing god gaming multi talented overlord'
      />

      <TextInput
        label='Location'
        placeholder='Bangalore'
      />

      <TextInput
        label='You can talk to me about'
        placeholder='Movies, Investment, Books, Music'
      />

      <TextInput
        label="Don't talk to me about"
        placeholder='Politics, Mountain, Canvas'
      />

      <TextInput
        label='A short bio'
        placeholder='I am a big fan of online games.....'
      />

      <Box mt={5} mb={3}>
        <Button text='Setup Account' />
      </Box>

      <Link to='/dashboard' className='setup-profile-wrapper__link'>
        Skip Now. Do it Later
      </Link>
    </div>
  )
}
import { Switch } from '@material-ui/core';
import React from 'react';
import './switch.scss';

interface SwitchI {
  label: string;
  description: string;
}

export default function SwitchWithLabel({ label, description }: SwitchI) {
  return (
    <div className='switch-wrapper'>
      <Switch
        size='medium'
        color='primary'
      />

      <div className='switch-info'>
        <span>
          { label }
        </span>

        <span className='switch-desc'>
          { description }
        </span>
      </div>
    </div>
  )
}
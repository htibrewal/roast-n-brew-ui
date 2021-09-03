import { Checkbox, SvgIcon } from '@material-ui/core';
import React from 'react';
import { CoreValueCardI } from '../../interfaces/interface';

export default function CoreValueCheckbox({ icon, text }: CoreValueCardI) {
  const handleChange = () => {}

  return (
    <div className='core-value-check-wrapper'>
      <Checkbox
        color="primary"
        onChange={handleChange}
        name='core-value'
      />

      <SvgIcon component={icon} className='core-value-check-wrapper__icon'>
      </SvgIcon>

      <span>
        {text}
      </span>
    </div>
  )
}
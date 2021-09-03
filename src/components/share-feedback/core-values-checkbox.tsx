import { Box } from '@material-ui/core';
import React from 'react';
import { CORE_VALUES } from '../../constants';
import CoreValueCheckbox from './core-value-checkbox';

export default function CoreValuesCheckbox() {
  return (
    <div className='sharing-with-wrapper'>
      <span>
        Core Values
      </span>

      <Box mb={2.5} mt={1}>
        <span className='description-class'>
          What all core values are applicable?
        </span>
      </Box>

      {CORE_VALUES.map((coreValue) => (
        <CoreValueCheckbox icon={coreValue.icon} text={coreValue.text} />
      ))}
    </div>
  )
}
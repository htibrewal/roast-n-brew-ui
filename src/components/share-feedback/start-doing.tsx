import { Box } from '@material-ui/core';
import React from 'react';
import TextInput from '../text-input/text-input';

export default function StartDoing() {
  return (
    <div className='sharing-with-wrapper'>
      <span>
        How to do better?
      </span>

      <Box mb={2.5} mt={1}>
        <span className='description-class'>
          Please fill at least one field
        </span>
      </Box>

      <TextInput
        label='Continue Doing'
        helperText='What do you feel that your team mate should keep doing?'
      />

      <TextInput
        label='Start Doing'
        helperText='What do you feel that your team mate should start doing?'
      />

      <TextInput
        label='Stop Doing'
        helperText='What do you feel that your team mate should stop doing?'
      />
    </div>
  )
};